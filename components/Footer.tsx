// components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-teal-400">
              About Me
            </h3>
            <p className="text-gray-300">
              Designer, developer, and creative problem-solver passionate about creating beautiful, functional digital experiences.
            </p>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-teal-400">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://linkedin.com/in/yourname" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition duration-300">
                  <FaLinkedin className="text-lg" />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition duration-300">
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/yourusername" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition duration-300">
                  <FaTwitter className="text-lg" />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/yourusername" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition duration-300">
                  <FaInstagram className="text-lg" />
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-teal-400">
              Contact
            </h3>
            <p className="text-gray-300">
              Email: <a href="mailto:hello@yourname.com" className="hover:text-teal-400 transition duration-300">divineadeyeye121@gmail.com</a>
            </p>
            <p className="text-gray-300">Location: Lagos, Nigeria</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Divine Adeyeye. All rights reserved.</p>
          <p className="mt-1">Designed and built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;