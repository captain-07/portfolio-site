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
Computer Science undergraduate focused on backend development, with hands-on experience building and shipping REST APIs and backend systems using Django, Django REST Framework, and FastAPI. Currently interning with FOSSEE Osdag (IIT Bombay). Interested in backend systems, databases, API design, and distributed/asynchronous processing.
}



%-----------TECHNICAL SKILLS-----------

\section{Technical Skills}

\begin{itemize}[leftmargin=0.15in,label={}]
\small{\item{
\textbf{Languages:} Python, SQL \\
\textbf{Backend:} Django, Django REST Framework, FastAPI, REST APIs, WebSockets \\
\textbf{Async \& Task Processing:} Celery, Redis, SQLAlchemy (async), Alembic \\
\textbf{AI/Search:} Pinecone, Retrieval-Augmented Generation (RAG), Google Gemini API \\
\textbf{Authentication:} JWT Authentication, Supabase Auth, Role-Based Access Control, CORS, HMAC Signing \\
\textbf{Databases:} PostgreSQL, SQLite, Supabase, Database Design \\
\textbf{DevOps \& Testing:} Docker, Docker Compose, GitHub Actions (CI/CD), Pytest \\
\textbf{API \& Integration:} Twilio, ElevenLabs, Cloudinary, OpenAPI/Swagger \\
\textbf{Tools:} Git, GitHub, Linux, Postman, VS Code, Cursor, Render, Vercel
}}
\end{itemize}



%-----------EXPERIENCE-----------

\section{Experience}

\resumeSubHeadingListStart

\resumeSubheading
{FOSSEE Osdag -- IIT Bombay}{Remote}
{Software Development Intern}{Sep 2026 -- Present}

\resumeItemListStart
\resumeItem{Selected as a Software Development Intern for Osdag, an open-source structural engineering design software project under FOSSEE (IIT Bombay), after a screening round that involved implementing a secure authentication system with Django and JWT.}
\resumeItemListEnd

\resumeSubHeadingListEnd



%-----------PROJECTS-----------

\section{Projects}

\resumeSubHeadingListStart


\resumeProjectHeading
{\textbf{CSEHub} $|$ \emph{Django, DRF, PostgreSQL, Pinecone, Gemini} $|$ \href{https://cse-hub-murex.vercel.app/}{\underline{Live}} $\cdot$ \href{https://github.com/captain-07/CSEHub}{\underline{GitHub}}}
{}

\resumeItemListStart

\resumeItem{Architected 10 relational models across 4 modular Django apps, with drf-spectacular auto-generating Swagger/ReDoc documentation for all endpoints.}

\resumeItem{Built a full CRUD REST API for 3 resources (articles, categories, tags) using DRF ViewSets and router-based URL configuration, enforcing admin-only write access via custom permission classes and eliminating N+1 queries with select\_related/prefetch\_related across 4 related lookups per request.}

\resumeItem{Built a RAG-based Q\&A chatbot that answers user questions grounded in the platform's own articles, embedding and retrieving content via Pinecone and generating responses with the Gemini API.}

\resumeItemListEnd


\resumeProjectHeading
{\textbf{Webhook Delivery Platform} $|$ \emph{FastAPI, Celery, Redis, PostgreSQL} $|$ \href{https://github.com/captain-07/Reliable-Webhook-Delivery-Platform}{\underline{GitHub}}}
{}

\resumeItemListStart

\resumeItem{Built an async FastAPI backend (SQLAlchemy async + Alembic) for reliable webhook delivery, with subscription management and an event ingest/fan-out pipeline.}

\resumeItem{Implemented Celery-based fan-out delivery with automatic retry and exponential backoff, HMAC payload signing for authenticity verification, and a full delivery-logs audit trail.}

\resumeItem{Added Redis-backed rate limiting (slowapi), containerized the full stack with Docker Compose (including Flower for Celery task monitoring), and wrote targeted tests for signing and delivery idempotency logic.}

\resumeItemListEnd


\resumeProjectHeading
{\textbf{Apadamitra AI -- Disaster Alert System} $|$ \emph{FastAPI, WebSockets, Twilio} $|$ \href{https://github.com/captain-07/apada-mitra}{\underline{GitHub}}}
{}

\resumeItemListStart

\resumeItem{Engineered 4 dedicated FastAPI route modules (SMS, voice, mitigation, prediction) plus a dedicated WebSocket endpoint for real-time voice-based disaster Q\&A.}

\resumeItem{Built a custom rate-limiting middleware enforcing 120 requests/minute per client with automatic memory cleanup, and centralized exception handling across HTTP, validation, and unhandled error cases.}

\resumeItem{Integrated 3 third-party APIs (Twilio, ElevenLabs, Gemini) for automated SMS, voice alerts, and multilingual message generation, as part of a 4-person hackathon team (BugBusterz).}

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


\end{document}