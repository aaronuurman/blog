import React from 'react';
import SEO from '../components/seo/seo';
import input from '../styles/input.module.css';
import Layout from '../components/layout/layout';
import spacing from '../styles/spacing.module.css';
import buttons from '../styles/buttons.module.css';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" />
		<h1>Contact</h1>
		<form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
			<div className={input.inputs}>
				<div>
					<input type="hidden" name="form-name" value="contact" />
					<input type="hidden" name="bot-field" />
					<input className={[spacing.p_1, spacing.m_y_1].join(' ')} type="text" name="name" id="name" placeholder="Name" />
					<input className={[spacing.p_1, spacing.m_y_1].join(' ')} type="email" name="email" id="email" placeholder="Email address" />
					<input className={[spacing.p_1, spacing.m_y_1].join(' ')} name="subject" id="subject" placeholder="Subject" />
				</div>
				<textarea className={[spacing.p_1, spacing.m_y_1].join(' ')} name="message" id="message" placeholder="Message"></textarea>
			</div>
			<button className={[buttons.btn_submit, spacing.p_1, spacing.m_t_2].join(' ')} type="submit" id="submit">Submit</button>
		</form>
	</Layout>
)

export default ContactPage