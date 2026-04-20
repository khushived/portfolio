import { useState } from 'react';
import siteContent from '../data/siteContent';

export default function Contact() {
  const { email, linkedin, github, resumeUrl, footerText } = siteContent.contact;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message.');
      }

      setStatus({ type: 'success', text: 'Message sent successfully. I will get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-[#0a0a0a] min-h-screen flex items-center">
      <div className="container-custom w-full">
        <h2 className="section-title">Let's Connect</h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Interested in working together or discussing cybersecurity? Reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <form onSubmit={onSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl text-green-400 font-semibold mb-6">Send a Message</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                className="w-full rounded-lg bg-gray-950 border border-gray-700 px-4 py-3 text-gray-200 focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="Your email"
                className="w-full rounded-lg bg-gray-950 border border-gray-700 px-4 py-3 text-gray-200 focus:outline-none focus:border-green-500"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                placeholder="Your message"
                className="w-full rounded-lg bg-gray-950 border border-gray-700 px-4 py-3 text-gray-200 focus:outline-none focus:border-green-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary mt-5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.text ? (
              <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.text}
              </p>
            ) : null}
          </form>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl text-green-400 font-semibold mb-6">Direct Links</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-gray-500">Email:</span>{' '}
                <a href={`mailto:${email}`} className="hover:text-green-400 transition-colors">{email}</a>
              </p>
              <p>
                <span className="text-gray-500">LinkedIn:</span>{' '}
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Profile</a>
              </p>
              <p>
                <span className="text-gray-500">GitHub:</span>{' '}
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Repositories</a>
              </p>
              {resumeUrl && resumeUrl !== '#' ? (
                <p>
                  <span className="text-gray-500">Resume:</span>{' '}
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">View Resume</a>
                </p>
              ) : (
                <p className="text-xs text-gray-500">Resume link will appear here once added.</p>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a
            href={`mailto:${email}`}
            className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:border-green-500 hover:bg-gray-800 transition-all duration-300 text-2xl"
            aria-label="Email"
          >
            📧
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:border-green-500 hover:bg-gray-800 transition-all duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            💼
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:border-green-500 hover:bg-gray-800 transition-all duration-300 text-2xl"
            aria-label="GitHub"
          >
            💻
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            {footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
  