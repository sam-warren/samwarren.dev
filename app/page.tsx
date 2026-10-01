import { experience, links, profile } from "@/lib/content";

export default function Home() {
  return (
    <main className="page">
      <header className="block">
        <h1 className="name">{profile.name}</h1>
        <p className="muted">{profile.role}</p>
      </header>

      <section className="block bio" aria-label="About">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="block" aria-labelledby="experience">
        <h2 id="experience" className="heading">
          Experience
        </h2>
        <ol className="roles">
          {experience.map((role) => (
            <li key={role.company} className="role">
              <div className="role-head">
                <h3 className="company">
                  {role.href ? <a href={role.href}>{role.company}</a> : role.company}
                </h3>
                <span className="years">{role.years}</span>
              </div>
              <p className="muted">{role.title}</p>
              <p className="summary">{role.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="block">
        <ul className="links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
