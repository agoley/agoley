export class Logs {
  constructor() {}

  displayBackPainLog() {
    const logRef = document.createElement("div");
    logRef.classList.add("log-body");
    const logHeaderRef = document.createElement("h1");
    logHeaderRef.innerHTML = "Surviving lower back pain, the non invasive way.";
    const uploadedOnDivDivRef = document.createElement("div");
    uploadedOnDivDivRef.innerHTML = "Posted: May 22, 2019";
    const updatedOnDivDivRef = document.createElement("div");
    updatedOnDivDivRef.innerHTML = "Last Updated: May 30, 2019";

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
      "<p style='font-size: 24px;'><b>Disclaimer</b> I am not a medical professional and if you are experiencing chronic or acute back pain you should consult a doctor.</p>" +
      "<p style='font-size: 24px;'><b>TL;DR</b> Be consious about your spine, stretch regularly, excerise your core, maintain good posture, and lift with your legs not your back.</p>" +
      "<p>It's easy to take our insides for granted, our hearts beat and we breath without thinking about it. It's easy until something goes wrong and we face a hard reality that there is system of nerves, organs, bones etc., inside that is so complex no one has ever fully understood it.</p>" +
      "<p>I set out to understand the cause of my pain and how to deal with it. The first thing I did was see an orthopedic and get an MRI. He explained the MRI results to me and that I had a buldged disc in the lumbar region of my spine. I had never had a lasting injury before and couldn't wrap my head around the fact that my body couldn't just fix it like everything else I had previously delt with. You only have one body and some things can't ever be like new again.</p>" +
      "<p class='accent' style='font-size: 24px;'><i>\"You only have one body and some things can't ever be like new again.\"</i></p>" + 
      "<p>I learned about how to heal and support my lower back to stop the pain. One analogy that stuck with me is that a vertibre disc is like a tire, once it develops a weak point it is always weak. I was desperate and researched surgical treatments, I was determined to take the least invasive recovery approach even if it meant dealing with the pain longer. In this article I combine all the knowledge I gained on this path to recovery in to one consolidated approach to ridding yourself from lower back pain non invasively.</p>" +
      "<p class='accent' style='font-size: 24px;'><i>\"one consolidated approach to ridding yourself from lower back pain non invasively.\"</i></p>" + 
      "<p style='font-size: 24px;'><b>Step 1 - Rest</b></p>" +
      "<p>Let your body do its thing. What your body can do for you is decrease the swelling around the disc. Your lower back is like grand central station for nerves, if you have something (like a bulged disc) putting pressure in that area you're liable to expierince pain almost anywhere.</p>" +
      "<p>Pain meds will help here, you don't need the strong stuff, Aleve works well.</p>" +
      "<p style='font-size: 24px;'><b>Step 2 - Physical therapy</b></p>" +
      "<p>In order to stay pain free and be able to live your life without fear that it will come back, you need to condition your body to keep the pressure off your spine. Physical therapy can be expensive and there are resources out there for lower back routines, including one I developed and share below. However going to a physical therapist is a great start.</p>" +
      "<p><i>If</i> you can I would suggest seeing a physical therapist as soon as the acute pain is gone for three weeks and as many times as possible during that period.</p>" +
      "<p>Once you have a feel for what your roadmap is and what stretches/excerises work best for you it's time to develop your own routine and practice it. I can't stress this enough, diligent practice is the key to recovery. You should preform your routine preferably once in the morning and once in the evening after work. Whatever you end up doing NEEDS to include the following:</p>" +
      "<p class='accent' style='font-size: 24px;'><i>\"diligent practice is the key to recovery.\"</i></p>" + 
      "<p><ul><li>Something for mobility (bridges/cat cow pose)</li><li>IT band stretch</li><li>Hip flexor stretch</li><li>Periformis stretch</li><li>Groin stretch</li><li>Hamstring stretch</li><li>Quadriceps stretch</li><li>Light core exercises (non back crunching)</li></ul></p>" +
      "<p><a href='https://www.youtube.com/playlist?list=PL-UfejGVFg2a6y4cGGOnHSn7h18bYo_bO'>Here is a YouTube playlist for my routine</a></p>" +
      "<div class='accent'><i><b>Notes on Stretching</b></i> Keep in mind stretching should be uncomfortable NOT painful. The ab routine in this playlist is intense, but it gives good examples of non back crunching ab excersices, do them at your own pace. Also the groin strech video gives 3 examples just pick one that you like the best.</div>" + 
      "<p style='font-size: 24px;'><b>Step 3 - Chiropractor</b></p>" +
      "<p>A good chiropractor will be your best friend during the process and the adjustments will accelerate your recovery. Like therapy a chiropractor is not 100% necessary to recover but If you can afford the time and money, I would suggest seeing one once your pain levels have decreased to a manageable level. </p>" +
      "<p style='font-size: 24px;'><b>Step 4 - Never forget</b></p>" +
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
