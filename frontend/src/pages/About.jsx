import React from 'react'

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">About FlatBuddy</h1>
      <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
        FlatBuddy is a minor project showcasing a modern real-estate marketplace built with React and Tailwind CSS.
        It demonstrates routing, themed UI, and component composition. This will scale into a major project with
        authentication, real data, and dashboards in the future.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[{title:'Mission',desc:'Connect people to homes with clarity and trust.'},{title:'Vision',desc:'A seamless platform from discovery to closing.'},{title:'Values',desc:'Trust, transparency, and usability first.'}].map((c)=> (
          <div key={c.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">{c.title}</div>
            <div className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
