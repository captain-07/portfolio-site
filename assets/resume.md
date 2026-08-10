%-------------------------
% Resume in Latex
% Backend Fresher Optimized
%-------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage[T1]{fontenc}
\usepackage{charter}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.6in}
\addtolength{\textheight}{1.1in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
  \vspace{-3pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\pdfgentounicode=1


\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4}
    \end{tabular*}\vspace{-6pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2
    \end{tabular*}\vspace{-6pt}
}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in,label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}\vspace{-5pt}}
\newcommand{\resumeItemListStart}{\begin{itemize}[itemsep=1pt]}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%% RESUME STARTS HERE %%%%%%%%%%%%%%%%%%%%

\begin{document}


%----------HEADING----------

\begin{center}
{\Huge \scshape Debjyoti Saha}\\[4pt]
\small
+91-9679379902 $|$
\href{mailto:sahadebjyoti363@gmail.com}{sahadebjyoti363@gmail.com} $|$
\href{https://www.linkedin.com/in/debjyotisaha2004/}{linkedin.com/in/debjyotisaha2004} $|$
\href{https://github.com/captain-07}{github.com/captain-07}
\end{center}



%-----------SUMMARY-----------

\section{Summary}

\small{
Computer Science undergraduate focused on backend development with hands-on experience building REST APIs using Python frameworks including Django, Django REST Framework, and FastAPI. Interested in backend systems, databases, API development, and software engineering practices.
}



%-----------TECHNICAL SKILLS-----------

\section{Technical Skills}

\begin{itemize}[leftmargin=0.15in,label={}]
\small{\item{
\textbf{Languages:} Python, SQL \\
\textbf{Backend:} Django, Django REST Framework, FastAPI, REST APIs \\
\textbf{Authentication:} JWT Authentication, Supabase Auth, Role-Based Access Control, CORS \\
\textbf{Databases:} PostgreSQL, SQLite, Supabase, Database Design \\
\textbf{DevOps \& Testing:} Docker, GitHub Actions (CI/CD), Pytest \\
\textbf{API \& Integration:} Twilio, ElevenLabs, Google Gemini API, Cloudinary, OpenAPI/Swagger \\
\textbf{Tools \& IDEs:} Git, GitHub, Linux, Postman, VS Code, Cursor, Render, Vercel
}}
\end{itemize}




%-----------PROJECTS-----------

\section{Projects}

\resumeSubHeadingListStart


\resumeProjectHeading
{\textbf{Apadamitra AI -- Disaster Alert System} $|$ \emph{FastAPI, WebSockets, Twilio} $|$ \href{https://github.com/captain-07/apada-mitra}{\underline{GitHub}}}
{}

\resumeItemListStart

\resumeItem{Engineered 4 dedicated FastAPI route modules (SMS, voice, mitigation, prediction) plus a dedicated WebSocket endpoint for real-time voice-based disaster Q\&A.}

\resumeItem{Built a custom rate-limiting middleware enforcing 120 requests/minute per client with automatic memory cleanup, and centralized exception handling across HTTP, validation, and unhandled error cases.}

\resumeItem{Integrated 3 third-party APIs (Twilio, ElevenLabs, Gemini) for automated SMS, voice alerts, and multilingual message generation.}

\resumeItem{Collaborated in a 4-person team (BugBusterz) on a hackathon project, contributing to backend development and testing.}

\resumeItemListEnd


\resumeProjectHeading
{\textbf{CSEHub} $|$ \emph{Django, Django REST Framework, PostgreSQL} $|$ \href{https://github.com/captain-07/CSEHub}{\underline{GitHub}}}
{}

\resumeItemListStart

\resumeItem{Architected 10 relational models across 4 modular Django apps, with drf-spectacular auto-generating Swagger/ReDoc documentation for all endpoints.}

\resumeItem{Built a full CRUD REST API for 3 resources (articles, categories, tags) using DRF ViewSets and router-based URL configuration, enforcing admin-only write access via custom permission classes.}

\resumeItem{Eliminated N+1 queries on article list/detail endpoints by applying select\_related and prefetch\_related across 4 related lookups (author, category, tags, code snippets) per request.}

\resumeItemListEnd


\resumeProjectHeading
{\textbf{Dev Blogs} $|$ \emph{Django REST Framework, PostgreSQL, JWT} $|$ \href{https://github.com/captain-07/Dev-Blogs}{\underline{GitHub}}}
{}

\resumeItemListStart

\resumeItem{Designed 3 relational models (Post, Comment, Like) with JWT-based authentication (60-minute access / 7-day refresh tokens) via SimpleJWT.}
\resumeItem{Implemented configurable pagination (default 10 items/page, up to 100 via query param) to control payload size on list endpoints, alongside Swagger/ReDoc API documentation.}

\resumeItem{Deployed the application with environment-based configuration and CORS setup.}

\resumeItemListEnd


\resumeSubHeadingListEnd


%-----------EDUCATION-----------

\section{Education}

\resumeSubHeadingListStart

\resumeSubheading
{Murshidabad College of Engineering and Technology}
{Murshidabad, WB, India}
{Bachelor of Technology in Computer Science \& Engineering}
{Aug. 2023 -- Jun. 2027}

\resumeItemListStart
\resumeItem{Relevant Coursework: Data Structures \& Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks}
\resumeItemListEnd

\resumeSubHeadingListEnd





%-----------ACHIEVEMENTS-----------

\section{Achievements \& Certifications}

\resumeSubHeadingListStart

\resumeSubheading
{HackerRank Verified Certifications}
{2026}
{Problem Solving (Basic \& Intermediate), Python, SQL}
{
}
\resumeSubheading
{100 Days of Code: The Complete Python Pro Bootcamp}
{2025}
{Udemy -- Instructor: Dr. Angela Yu}
{}

\resumeSubHeadingListEnd


\end{document}