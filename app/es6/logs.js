export class Logs {
  constructor() {}

  displayBackPainLog() {
    const logRef = document.createElement("div");
    logRef.classList.add("log-body");
    const logHeaderRef = document.createElement("h2");
    logHeaderRef.innerHTML = "Surviving lower back pain, the non invasive way.";
    const uploadedOnDivDivRef = document.createElement("div");
    uploadedOnDivDivRef.innerHTML = "Posted: May 22, 2019";
    const updatedOnDivDivRef = document.createElement("div");
    updatedOnDivDivRef.innerHTML = "Last Updated: May 27, 2019";

    const lowerBackAsciiNode = document.createElement("div");
    lowerBackAsciiNode.innerHTML = "";

    const asciiBackNode = document.createElement("p");
    asciiBackNode.innerHTML =
      '<code><span style="display:block;line-height:8px; font-size: 8px; font-weight:bold;white-space:pre;font-family: monospace;">' +
      "............                           #,,,,,,..........,,..............,,,,......................................................,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
      ".........                              *,,,,,,........,,............................................................................,,,,,,,,,,,,,,,,,,,,,,,,,,,\n" +
      " .. ..                               ....,,,,,......,,,,,..................................,,,.........................................,,,,,,,,,,,,,,,,,,,,,,,,\n" +
      "                                 ..,,,,,,,,,,,.....,,,,,,.......,............,,,,,,,.........,...........................................,,,,,,,,,,,,,,,,,,,,,,\n" +
      "                             ,,,,,,,,,......,......,,,,,,.................,,,,,,,,,,,,....................................................,,,,,,,,,,,,,,,,,,,,,\n" +
      "                         .,,,,,,,,..........,,......,,,,,................,,,,,..,,,**,,......................,............................,,,,,,,,,,,,,,,,,,,,,\n" +
      "                      .,,,,,,,,,,...........,,.....,,,,,,,......,,.....,,,,,.....,,*/*,,,,,,,,,,................,,............................,,,,,,,,,,,,,,,,,\n" +
      "                    ,,,,,,,,,,,,,,,........,,,,....,,,,,,,,.,,,,,,.....,,........,,*/(((////*,,.....................,..........................,,,,,,,,,,,,,,,,\n" +
      "                .,,,,,,,,,,,,,,****,.......,,,,,...,,,***,,,,,,,,..............,,,**/%((///*****,,,,,,,,,,,,,.........,,.......................,,,,,,,,,,,,,,,,\n" +
      "               .,,,,,,,,,,,,,,******,......,,,,,,..,,,**********,.........,,,,,,,**/(###(((((((((/////***,,,,........,,,,......................,,,,,,,,,,,,,,\n" +
      "              .,****,,,,,,,,****,***,,..,,,,,,,,,..,,,,,******//*,..,,,,,,,,*****//(#@%%#####%%#%%%%####((///***,,,,,...,,,*......................,,,,,,,,,,,,,\n" +
      "             .*///****,,,,****,,*****,,,,,,,,**,,...,,,,,****//((//***////////////((#%,.#%%%###%###%%%%%%##((//**//(((/**,,*,*......................,,,,,,,,,,,\n" +
      "             *//////*********,,,,****,,,,,,,***,,,...,,,,,,***//(((//*///((((((((((((      /##%%%%###%%%%%##((////(((//(((///**.......................,,,,,,,,,\n" +
      "            ,//(/////////****,,,,,,***,,,,*****,,,...,,,,,,,,*****////**/////(((((((          . ,*(######(#####/**,,**//((((///.......................,,,,,,,,,\n" +
      "           ./((((((((((///*****,,,,,*******/**,,,,,.,,,,,,,,***,,,**///////////((((/                ........,,,*****//(((((((#%,.......................,,,,,,,,\n" +
      "           *##((((###((//*****,,,,*****//////**,,,,,,,,,,,,****,,,,***/////////((((.                  ....,,,,,***//((##%%%&&%/..........................,,,,,,\n" +
      "           /###((#%%##((///*****,,**/////((//***,,*****,,****/**,,,****////////(((/                    .,,,,,,****/(##%%&&&............................,,,,,,\n" +
      "           /####(((&%%%##(((////***//(((((((//**,***,,,*****///*********///////(((/                   .,,,,,***/(##%&&&&&&%..............................,,,,,,\n" +
      "           *###(((/#&&&%%####((((((((((((((((/**,**//***,**///(////******//////((/,                 .,,,,,*/(##%%%&&&&&.................................,,,,,\n" +
      "           .###(////%&&&&%%%%#########((((((((/*,,**/**,***////(((////**///////((/.               .,,***((#%%%&&&&&&&%......................................,,,\n" +
      "            /(#(//*/(%@&&&&%%%%#####(((((((((((/*,*/////,,*//(//(((((//////////(//.             .,***//##%%&&&&&&&&%........................................,,,\n" +
      "            ,(#((/**/(&@&&&%%%%####((((((((((((/***///(**//*///////(((((////(/////.           .,,**//(#%%&&&&&&&&%..........................................,,,\n" +
      "            ,(#((/**//#&@&&%%%%%####((((((((/////(//((#((*,/////////(((((((((((///,        .,,,**/(##%&&&&&&&&%/............................................,,,\n" +
      "            *##((//**/(#@@&&%%%%%#####((((((((((//**/,##(/***/////////((((((((((//*      .,,**/(#%%&&&&&&&&%(...............................................,,,\n" +
      "           .(#(((/////(#%@&&&&%%%%%####(((((((//*****,((##///*///////(((((((((((//*    ,**//(#%%&&&&&&&%%,. ..................................................,\n" +
      "           *###((//////(#&&/&&&%%%%%####(((((/((//*//**(/#(*((((///////(((((((((/// .,**/(#%%&&&&&&%%,..   ...................................................,\n" +
      "           (###((/////((#%% .%&&&&%%%%###(((((((////***/(/(/**/((////////((((((((/,,*/(#%%&&&&&&%,         ...................................................,\n" +
      "          .#%##((/////((#%*   %&&&&%%%%###((((////**,*///////(((((////////(((((/,,**(##%&&&&&(.            ...................................................,\n" +
      "          *####(((////((##.    #%&&&%%%%###((((//(//((,,,,#**,,*//(/////((((((,.,*/(#%&&&                ...................................................,\n" +
      "          (%###((////((##(      #&&&&%%%%###((((((//*,/*/((/*/#((((/(((//((((,,*//##%%&&(                  ...................................................,\n" +
      "          (%###(((////(##(       %&&&&%%%%####(((/(/((/*,,*(/,,,/(((((((///,.,*/(####%%,                   ...................................................,\n" +
      "          #%%###((///((#((        %&&&&%%%%###((((/((*//*(/#/*/##((((/*...,*/((((/#%%%/                    ...................................................,\n" +
      "          #%%###(((((((#(/         %&&&&%%%%%###((((((((*/,*(/*******/##%%%%%#(//#%%%#*                    .................................................,,,\n" +
      "          #%%###((((((((/,         *%&&&&&%%%%#######(,**/(##/,(%&&&@&%(*,,,/##%%%&%%#                     ................................................,,,,\n" +
      "          #%%%###((((((((           #%&&&%%%%%%%%%###((((*/*/(/******/(#%%&@&&&&%%%%&.                   .................................................,,,,,\n" +
      "          #%%%####((((#(/           (#%%%%%%%%%%%####((**/(##/%%&&&&&@/*/(#%%&&%#(%                    .................................................,,,,,\n" +
      "          #%%%#########(            /(#######((((((((((((,(**(//#*,,,*/##%&@@%((%%%(.                    .................................................,,,,,\n" +
      "          *%&%%#######(/           *((###(((((((((((((/*,*/(((((#%%%%&&&&&%**/#%%%##/                  ..................................................,,,,,,\n" +
      "          #%%%%######((/           ((##############(((///,,.,*((%%%%%%%(,,*(#&&%##(((*                 ..................................................,,,,,,\n" +
      "          %#&%%%%####(//           (#####(((#####(((((,*///((#(*/*/((//##%&&&%###((///                .................................................,,,,,,,,\n" +
      "          %#%%%#%&%%##((           (((((((((///(((((((((**/,*//,/////&((//(((((((//,              ...................................................,,,,,,,,\n" +
      "          #%&&&&&%%##(((           ///((/////////((((/.***((((*,,,///////////////////*              ................................................,,,,,,,,,,,\n" +
      "          (&&&&%%%###(#(          .///////////*///((((((./*///.,///////****//////////*,          ...................................................,,,,,,,,,,,\n" +
      "          #&&&%%%%%####(          *///////////***//(//*,./*.,**,/*************//////***.         .................................................,,,,,,,,,,,,,\n" +
      "</span></code>";

    const blogNode = document.createElement("div");
    blogNode.style.maxWidth = "800px";
    blogNode.innerHTML =
      "<p><b>Disclaimer;</b> I am not a medical professional and if you are experiencing chronic or acute back pain you should consult a doctor.</p>" +
      "<p><b>TLDR;</b> Be consious about your spine, stretch regularly, excerise your core, maintain good posture, and lift with your legs not your back.</p>" +
      "<p>It's easy to take our insides for granted, our hearts beat and we breath without thinking about it. It's easy until something goes wrong and we face a hard reality that there is system of nerves, organs, bones etc inside that is so complex no one has ever fully understood it, and our health depends on it all working.</p>" +
      "<p>I ignored my spine. I had plenty of warnings, I was warned by my doctor that because of my height and torso length I would be a risk. I felt soreness after extended physical activity but never stopped to think about what my body was trying to tell me. It was trying to tell me that the disk between my L4 and L5 vertibre was under to much pressure and was developing a buldge. Like most things, I ignored it until something went wrong, one morning I woke up after a day of playing basketball and was in so much pain I could hardly move, and would be dealing with that debilitating pain for about a year.</p>" +
      "<p>That was my wake up call for paying attention to my body. I set out to understand the cause of the pain and how to deal with it. The first thing I did was see an orthopedic and get an MRI. He explained the MRI results to me and that I had a buldged disc in the lumbar region of my spine. After that I was confused, trying to understand the prognosis of that, I had never had a lasting injury before and couldn't wrap my head around the fact that my body couldn't just fix it like everything else I had previously delt with. This is something I wish I had thought about while I was ignoring the signs, you only have one body and some things can't ever be like new again, vertibre discs are one example.</p>" +
      "<p>Through multiple visits to the orthopedic I learned about how to heal and support my lower back to stop the pain. I was skeptical that I would ever feel the way I did before. One analogy that stuck with me is that a vertibre disc is like a tire, once it develops a weak point it is always weak there. So how do I cure myself of this? I was desperate and researched surgical treatments, but I was determined to take the least invasive recovery approach even if it meant dealing with the pain longer. I'm glad I did because through it all I have reached that point I was skeptical about, I feel better than before. In this article I combine all the knowledge I gained on this path to recovery in to one consolidated approach to ridding yourself from lower back pain non invasively.</p>" +
      "<p><b>Step 1 - Rest</b></p>" +
      "<p>Let your body do its thing. Your body will fix the acute pain. I couldn't move that morning because my body took over. It was tired of me not listening and locked up, it hardened all my muscles surrounding my lower back essentially disabling me until it had time to do what it can. What your body can do for you is decrease the swelling around the disc which often causes acute pain by putting pressure on any of the nerves that run through that area. Your lower back is like grand central station for nerves, if you have something (like a bulged disc) putting pressure in that area you're liable to expierince pain almost anywhere. You may not even realize what is causing that pain. Give yourself time to rest. The amount of time in the rest period depends on the severity of the swelling, I was bed ridden for about three days but that is on the extreme side. Ideally you want to minimize this time in order to start your job in the recovery. Pain meds will help here, you don't need the strong stuff, Aleve works well. Just remember that the meds aren't fixing anything, don't agree to help a friend pack their home up and move just because you can pop some pain meds and move again.</p>" +
      "<p><b>Step 2 - Physical therapy</b></p>" +
      "<p>Now it's time to do your part. In order to stay pain free and be able to live your life without fear that it will come back you need to condition your body to keep the pressure off your spine, and free it up to do its job, help you move. Physical therapy doesn't just mean going to a therapist, it can be expensive and there are countless great resources out there for lower back routines, including one I developed and share below. However going to a physical therapist is a great start. They will be able to give you an idea of how much work you have ahead of you and customize a routine to your specific weaknessess. If you can I would suggest seeing a physical therapist as soon as the acute pain is gone for three weeks and as many times as possible during that period.</p>" +
      "<p>Once you have a feel for what your roadmap is and what stretches/excerises work best for you it's time to develop your own routine and practice it. I can't stress this enough, diligent practice is the key to recovery. You should preform your routine twice a day everyday. Make time for it. Preferably once in the morning and once in the evening after work. I'll share my routine that I developed from taking what I found worked best from the therapy as well as other resources I expierimented with. You don't need to follow mine but whatever you end up doing NEEDS to include the following:</p>" +
      "<p><ul><li>Something for mobility (bridges/cat cow pose)</li><li>IT band stretch</li><li>Hip flexor stretch</li><li>Periformis stretch</li><li>Groin stretch</li><li>Hamstring stretch</li><li>Quadriceps stretch</li><li>Light core exercises (non back crunching)</li></ul></p>" +
      "<p><a href='https://www.youtube.com/playlist?list=PL-UfejGVFg2a6y4cGGOnHSn7h18bYo_bO'>Here is a YouTube playlist for my routine</a></p>" +
      "<p><b>Step 3 - Chiropractor</b></p>" +
      "<p>Seeing a chiropractor is not strictly necessary but I would suggest seeing one once your pain levels have decreased to a manageable level. A good chiropractor will be your best friend during the process and the adjustments will accelerate your recovery.</p>" +
      "<p><b>Step 4 - Never forget</b></p>" +
      "<p>This article is titled surviving lower back pain not curing it. Never forget that debilitating pain and always practice your streching and mobility. Stay consious about your insides and listen to your body. </p>";

    const connectNode = document.createElement("p");
    connectNode.classList.add("ask-alex");
    connectNode.innerHTML =
      "Thanks for reading. For help with this site or to check out its progress go here: ";

    const repositorylinkNode = document.createElement("a");
    repositorylinkNode.setAttribute("href", "https://github.com/agoley/agoley");
    repositorylinkNode.innerText = "https://github.com/agoley/agoley";

    const linkedinNode = document.createElement("p");
    linkedinNode.innerText = "Connect with me on LinkedIn: ";

    const linkedinLinkNode = document.createElement("a");
    linkedinLinkNode.setAttribute(
      "href",
      "https://www.linkedin.com/in/alex-goley-6230479b/"
    );
    linkedinLinkNode.innerText =
      "https://www.linkedin.com/in/alex-goley-6230479b/";
    linkedinNode.appendChild(linkedinLinkNode);

    connectNode.appendChild(repositorylinkNode);
    connectNode.appendChild(linkedinNode);

    logRef.appendChild(logHeaderRef);
    logRef.appendChild(uploadedOnDivDivRef);
    logRef.appendChild(updatedOnDivDivRef);
    logRef.appendChild(lowerBackAsciiNode);
    logRef.appendChild(asciiBackNode);
    logRef.appendChild(blogNode);
    logRef.appendChild(connectNode);

    document.getElementById("DomHook").appendChild(logRef);
  }
}
