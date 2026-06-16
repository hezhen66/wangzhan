import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

// 生产环境：静态文件服务
app.use(express.static(join(__dirname, 'dist')))

// 邮件发送器
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // 465端口用SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// 联系表单接口
app.post('/api/contact', async (req, res) => {
  const { name, phone, city, message } = req.body

  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, message: '请填写完整信息' })
  }

  const mailOptions = {
    from: `"云声健官网留言" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL,
    subject: `云声健加盟咨询 - 来自 ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #C41E3A;">云声健五香牛肉坊 - 加盟咨询</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">姓名</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>${name}</strong></td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">电话</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>${phone}</strong></td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">城市</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${city || '未填写'}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">留言内容</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td></tr>
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">此邮件来自云声健官网留言表单</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`邮件已发送: ${name} ${phone}`)
    res.json({ success: true, message: '提交成功，我们会尽快与您联系' })
  } catch (err) {
    console.error('邮件发送失败:', err.message)
    res.status(500).json({ success: false, message: '提交失败，请稍后重试' })
  }
})

// 生产环境 SPA fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`邮件服务运行在 http://localhost:${PORT}`)
})
