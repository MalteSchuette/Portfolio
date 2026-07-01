# Malte Schütte — Portfolio

A personal portfolio website built with Angular, featuring project showcases, an about section, skill set overview, testimonials, and a working contact form.

## Tech Stack

- **Frontend:** Angular 20, SCSS, ngx-translate (DE/EN)
- **Contact form backend:** PHP + PHPMailer (Gmail SMTP)
- **Deployment:** Nginx

## Features

- Multi-language support (German / English)
- Featured projects with live and source links
- References / testimonials section
- Contact form with server-side email delivery
- Fully responsive layout

## Development

```bash
npm install
ng serve
```

App runs at `http://localhost:4200`.

## Build

```bash
ng build
```

Build output goes to `dist/`.

## Contact Form Backend

The PHP mailer lives outside this repository. It requires a `mail_config.php` file on the server with Gmail SMTP credentials. CORS is configured to accept requests from the frontend origin.
