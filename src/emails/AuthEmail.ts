import { transport } from "../config/nodemailer"

type EmailType = {
    name: string
    email: string
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: 'ExpTracker <admin@exptracker.com>',
            to: user.email,
            subject: 'ExpTracker - Confirma tu cuenta',
            html: `<p>Hola: ${user.name}, has creado tu cuenta en ExpTracker, ya esta casi lista</p>
                <p>Visita el siguiente enlace:</p>
                <a href="${process.env.FRONTEND_URL}/auth/confirm-account">Confirmar cuenta</a>
                <p>e ingresa el código: <b>${user.token}</b></p>`
        })

        // console.log('Mensaje enviado ', email.messageId)
    }

    static sendPasswordResetToken = async (user: EmailType) => {
        const email = await transport.sendMail({
            from: 'ExpTracker <admin@exptracker.com>',
            to: user.email,
            subject: 'ExpTracker - Reestablece tu Password',
            html: `<p>Hola: ${user.name}, has solicitado reestablecer tu password</p>
                <p>Visita el siguiente enlace:</p>
                <a href="${process.env.FRONTEND_URL}/auth/new-password">Reestablecer Password</a>
                <p>e ingresa el código: <b>${user.token}</b></p>`
        })

        // console.log('Mensaje enviado ', email.messageId)
    }


}