import React from 'react'

import {Layout, SEO} from '../components'

import input from '../styles/input.module.css'
import spacing from '../styles/spacing.module.css'
import buttons from '../styles/buttons.module.css'

const ContactPage = () => {
  let title = 'Contact'

  let inputClasses = [spacing.p_1, spacing.m_y_1].join(' ')

  let btnClasses = [buttons.btn_submit, spacing.p_1, spacing.m_t_2].join(' ')

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true">
        <div className={input.inputs}>
          <div>
            <input aria-label="Netlify form name" type="hidden" name="form-name" value="contact" />
            <input aria-label="Bot field" type="hidden" name="bot-field" />
            <input
              aria-label="Name input"
              className={inputClasses}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              aria-label="Email address input"
              className={inputClasses}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            <input
              aria-label="Subject input"
              className={inputClasses}
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <textarea
            aria-label="Text area input"
            className={inputClasses}
            name="message"
            id="message"
            placeholder="Message"></textarea>
        </div>
        <button className={btnClasses} type="submit" id="submit">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default ContactPage
