/**
 * Building with AI — Part 2 (Advanced): interest & skills survey.
 *
 * HOW TO USE
 * 1. Go to https://script.google.com  →  New project.
 * 2. Paste this whole file in, replacing the default code.
 * 3. Press Run (▶) and choose createPart2Survey. Authorize when asked.
 * 4. The Execution log prints the edit + live URLs; the form also lands
 *    in your Google Drive.
 *
 * Questions are grounded in what we actually teach: React/Vite/TS frontends,
 * AWS serverless (Lambda + API Gateway), DynamoDB, S3 uploads, Cognito auth,
 * SES, the Anthropic API, MCP servers, Claude Code, Git/CI-CD, Python, YOLO.
 */
function createPart2Survey() {
  const form = FormApp.create('Building with AI — Part 2 (Advanced): Interest & Skills');

  form.setDescription(
    "Part 2 is optional and advanced. Part 1 was about building with an AI " +
    "builder; Part 2 goes underneath it: real backends and APIs, cloud and " +
    "serverless (AWS), databases, authentication, and AI engineering (the " +
    "Claude API, agents, MCP, tools like Claude Code).\n\n" +
    "Only fill this out if you're interested in the advanced session. Be " +
    "honest about your experience — \"never done it\" is a completely fine " +
    "answer and helps us pitch the class at the right level. Nothing here is " +
    "graded."
  );
  form.setCollectEmail(false); // email is asked as a question instead (optional)
  form.setProgressBar(true);

  // ---- Section 1: identity + interest gate (default first page) ----
  form.addTextItem().setTitle('Your name').setRequired(true);

  form.addTextItem()
    .setTitle('Your assigned ID number')
    .setRequired(true);

  form.addListItem()
    .setTitle('Team number')
    .setChoiceValues(['1', '2', '3', '4', '5', '6', '7'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email (optional)')
    .setHelpText('So we can send the invite if the advanced session happens.');

  const interest = form.addMultipleChoiceItem()
    .setTitle('Are you interested in the advanced Part 2?')
    .setRequired(true);

  // ---- Section 2: experience (built now so the gate can point at it) ----
  const skillsPage = form.addPageBreakItem()
    .setTitle('What have you actually done?')
    .setHelpText("Honest answers only — 'never done it' is genuinely useful.");

  form.addCheckboxItem()
    .setTitle("Select everything you've actually done yourself")
    .setHelpText("Actually did it — not 'watched a video about it'.")
    .setChoiceValues([
      'Used the terminal / command line',
      'Wrote code in JavaScript or TypeScript',
      'Wrote code in Python',
      'Used Git and GitHub (commits, push, pull)',
      "Called someone else's API from code (weather, maps, Stripe, an AI API…)",
      'Read API documentation to figure out how to use it',
      'Built my own backend / server with endpoints others can call',
      'Designed a database table or schema',
      'Stored and queried data in a real database',
      'Added user login / authentication to an app',
      'Handled file uploads (images, etc.) in an app',
      'Deployed a FRONTEND to the internet (a live site)',
      'Deployed a BACKEND to the internet (a live API)',
      'Used the AWS console or an AWS service',
      'Wrote a serverless / cloud function (AWS Lambda, etc.)',
      'Built an AI agent or chatbot using an API (Claude, GPT…)',
      'Built or configured an MCP server',
      'Trained or ran a machine-learning / computer-vision model',
      "None of these yet — I'm just starting out",
    ])
    .showOtherOption(false);

  form.addCheckboxItem()
    .setTitle('Which AI coding tools have you used?')
    .setChoiceValues([
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'Codex / OpenAI Codex',
      'Replit AI (the Part 1 tool)',
      'ChatGPT / Claude in the browser (copy-paste code)',
      'None yet',
    ])
    .showOtherOption(true);

  const levels = ['Never done it', 'Beginner', 'Comfortable on my own', 'Could teach it'];
  form.addGridItem()
    .setTitle('Rate yourself in each area')
    .setRows([
      'Frontend (screens, styling, React)',
      'Backends & APIs (endpoints, servers)',
      'Databases (modeling and querying data)',
      'Cloud & serverless (AWS, Lambda, deploys)',
      'AI engineering (APIs, agents, prompts in code)',
      'Terminal & Git (command line, version control)',
    ])
    .setColumns(levels);

  // ---- Section 3: what they want ----
  form.addPageBreakItem().setTitle('What you want from Part 2');

  form.addCheckboxItem()
    .setTitle('What do you most want to learn?')
    .setChoiceValues([
      'Building real backends & APIs (not just a frontend)',
      'Databases: modeling and querying data properly',
      'Cloud & serverless on AWS (Lambda, S3, DynamoDB)',
      'Authentication done right (real login, Cognito)',
      'The Claude API: building AI features into apps',
      'AI agents & tools (function calling, workflows)',
      'MCP servers (giving AI real capabilities)',
      'Getting fluent with Claude Code / agentic coding',
      'Computer vision & ML (YOLO and friends)',
      'DevOps: Git, CI/CD, shipping automatically',
      'Writing code confidently without an AI builder',
    ])
    .showOtherOption(true);

  form.addScaleItem()
    .setTitle('How comfortable are you writing code without an AI builder holding your hand?')
    .setBounds(1, 5)
    .setLabels('I need it for everything', 'I can read and write it myself');

  form.addParagraphTextItem()
    .setTitle('What is your team planning to build?')
    .setHelpText('Your startup idea in a sentence or two — rough is fine.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What part of building it worries you most, or you have no idea how to do yet?')
    .setHelpText('This tells us what Part 2 should cover for your team.');

  form.addParagraphTextItem()
    .setTitle('Anything else we should know?');

  // ---- Wire the interest gate now that the pages exist ----
  interest.setChoices([
    interest.createChoice('Yes — count me in', skillsPage),
    interest.createChoice('Maybe — depends what\'s covered', skillsPage),
    interest.createChoice('No thanks', FormApp.PageNavigationType.SUBMIT),
  ]);

  Logger.log('Edit the form:  ' + form.getEditUrl());
  Logger.log('Share this URL: ' + form.getPublishedUrl());
}
