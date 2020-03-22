import React from 'react';

import { Link } from 'gatsby';
import { useGraphQL } from '../hooks/use-graphql';
import LogoLandscape from './logo-landscape';

export default function Footer() {
  const {
    site: { siteMetadata },
    allSiteNavigationJson,
  } = useGraphQL();
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link to="/">
              <LogoLandscape className="h-6 text-gray-500 transition duration-150 ease-in hover:text-teal-700" />
            </Link>
            <p className="mt-8 text-base leading-6 text-gray-500">
              Your project meets our team.
            </p>
            <div className="flex mt-8">
              <a
                href={siteMetadata.facebook}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={siteMetadata.instagram}
                className="ml-6 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid gap-8 mt-12 sm:grid-cols-2 xl:mt-0 xl:col-span-2">
            <div>
              <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
                Contact
              </h4>
              <dl className="grid grid-cols-1 gap-4 mt-4">
                <div className="sm:col-span-1">
                  <dt className="font-semibold leading-5 tracking-wider text-gray-400">
                    Phone
                  </dt>
                  <dd className="mt-1 text-base leading-6 text-gray-500 transition duration-150 ease-in hover:text-gray-900">
                    <a
                      href={`tel:${siteMetadata.phone}`}
                      className="flex items-center group"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2 text-gray-400 transition duration-150 ease-in group-hover:text-gray-500"
                      >
                        <path d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                      </svg>
                      {siteMetadata.phoneFormatted}
                    </a>
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="font-semibold leading-5 tracking-wider text-gray-400">
                    Email
                  </dt>
                  <dd className="mt-1 text-base leading-6 text-gray-500 transition duration-150 ease-in hover:text-gray-900">
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="flex items-center group"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2 text-gray-400 transition duration-150 ease-in group-hover:text-gray-500"
                      >
                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      {siteMetadata.email}
                    </a>
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="font-semibold leading-5 tracking-wider text-gray-400">
                    Address
                  </dt>
                  <dd className="mt-1 text-base leading-6 text-gray-500 transition duration-150 ease-in hover:text-gray-900">
                    <a
                      href={`tel${siteMetadata.address}`}
                      className="flex items-center group"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2 text-gray-400 transition duration-150 ease-in group-hover:text-gray-500"
                      >
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {siteMetadata.address}
                    </a>
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="font-semibold leading-5 tracking-wider text-gray-400">
                    Hours
                  </dt>
                  <dd className="mt-1 text-base leading-6 text-gray-500 transition duration-150 ease-in hover:text-gray-900">
                    <a
                      href={`tel${siteMetadata.phone}`}
                      className="flex items-center group"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2 text-gray-400 transition duration-150 ease-in group-hover:text-gray-500"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {siteMetadata.hours}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
                Navigation
              </h4>
              <ul className="mt-4">
                {allSiteNavigationJson.nodes.map(node => (
                  <li key={node.id} className="mt-4 first:mt-0">
                    <Link
                      to={node.slug}
                      activeClassName="text-teal-700"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      {node.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} {siteMetadata.title}. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
