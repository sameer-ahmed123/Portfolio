"use client";

import { motion } from "framer-motion";

function linksvg() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    </>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Full Stack Projects
        </motion.h2>

        <div className="space-y-16">
          {/* E-commerce Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">CineView</h3>
                    <p className="text-gray-400">
                      A dynamic and responsive movie discovery platform built
                      with React and Firebase, allowing users to search, filter,
                      and explore a vast library of films and TV shows.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        Frontend Architecture
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• React for Ui Components</li>
                        <li>• React Router for Navigation</li>
                        <li>• Axios for API Requests</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        Backend Systems
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Django for RESTful API</li>
                        <li>• PostgreSQL for Data Storage</li>
                        <li>• Firebase Authenticationg</li>
                        <li>• Firebase Storage for User Uploads</li>
                      </ul>
                    </div>
                  </div>

                  {/* <div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 99.99% Uptime with Blue-Green Deployment</li>
											<li>• 300ms Average API Response Time</li>
											<li>• 45% Reduction in Infrastructure Costs</li>
										</ul>
									</div> */}
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    System Architecture
                  </h4>
                  <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Client Layer */}
                      <g>
                        <rect
                          x="20"
                          y="20"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="45"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          React Frontend
                        </text>
                      </g>

                      {/* API Layer */}
                      <g>
                        <rect
                          x="20"
                          y="80"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-purple-500/20 stroke-purple-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="105"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Django REST Framework API
                        </text>
                      </g>

                      {/* Cache Layer */}
                      <g>
                        <rect
                          x="20"
                          y="140"
                          width="360"
                          height="30"
                          rx="4"
                          className="fill-teal-500/20 stroke-teal-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="160"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Redis Cache Layer
                        </text>
                      </g>

                      {/* Database Layer */}
                      <g>
                        <rect
                          x="20"
                          y="190"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-blue-500/20 stroke-blue-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="215"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          PostgreSQL Database
                        </text>
                      </g>

                      {/* Search Layer */}
                      <g>
                        <rect
                          x="20"
                          y="250"
                          width="360"
                          height="30"
                          rx="4"
                          className="fill-teal-500/20 stroke-teal-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="270"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Elasticsearch Product Search
                        </text>
                      </g>

                      {/* Connection Lines */}
                      <g className="stroke-gray-600" strokeWidth="1">
                        <line x1="200" y1="60" x2="200" y2="80" />
                        <line x1="200" y1="120" x2="200" y2="140" />
                        <line x1="200" y1="170" x2="200" y2="190" />
                        <line x1="200" y1="230" x2="200" y2="250" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: "20px",
					gap: "5px",
                  }}
                >
                  <a href="https://cineview-f70fd.web.app/">CineView</a>
                  <a href="https://cineview-f70fd.web.app/">{linksvg()}</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-time Analytics Platform */}
        </div>
      </div>
    </section>
  );
}
