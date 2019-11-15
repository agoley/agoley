export class Logs {
  constructor() {}

  displayBackPainLog() {
    document.getElementById("title").innerHTML = "agoley - surviving back pain";
    document.getElementById("meta").innerHTML =
      "one consolidated approach to ridding yourself from lower back pain non invasively.";
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
      "<p>This article is titled surviving lower back pain not curing it. Never forget that debilitating pain and always practice your streching and mobility. Stay consious about your spine and listen to your body. </p>";

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

  displayBestDevLifeLog() {
    document.getElementById("title").innerHTML =
      "agoley - How to Live your Best Dev Life";
    document.getElementById("meta").innerHTML =
      "How to Live your Best Dev Life.";
    var logRef = document.createElement("div");
    logRef.classList.add("log-body");
    var logHeaderRef = document.createElement("h1");
    logHeaderRef.innerHTML = "How to live your best dev life.";
    var uploadedOnDivDivRef = document.createElement("div");
    uploadedOnDivDivRef.innerHTML = "Posted: Nov 14, 2019";
    var updatedOnDivDivRef = document.createElement("div");
    updatedOnDivDivRef.innerHTML = "Last Updated: Nov 14, 2019";

    var askingNode = document.createElement("div");
    askingNode.innerHTML = "";

    var asciiJobNode = document.createElement("p");
    asciiJobNode.innerHTML =
      '<code><span style="display:block;line-height:8px; font-size: 8px; font-weight:bold;white-space:pre;font-family: monospace;">' +
      'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyyysssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyysssssyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyysssssssssssssssssssssssyyssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyssssssssssssssssssssssyysssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssysssssssyyyysssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyyssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssssssssyyyyyyyyysssssssssssssssssssssssssssssssysssyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssssssyhddddddddhsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssysssyssssssssssssssssssss\n' +
      'sssssssssssssssssssssssysyhddddddhyo+ssysssssssssssssssssssssssssssssssyssssssssssssssssssssssssssssssssssssssssssssssssssss+os/::+sysssssssssssssssss\n' +
      'sssssssssssssssssssssssyydddddddh/..`.oysssssssssssssssssossssossssssss++++++++ossssssssooooooooooooosssssssssssssssssssssss+::-::..-://+sso++yddddddd\n' +
      'ssssssssssssssssssssssyshdddddy:-.`-/-:ssssssssssssssssyo:+//+/ossss+/+///////////osysso:+/////////////sssssssssssssssssys::::::.```````...`  oMMMMMMM\n' +
      'sssssssssssssssssssssssyhddddds...`.-..-+ssssssssssssssyo:+//+/oyso/+//+///////+//+/ssso:+/+////////+/+:ossssssssssssssssso+///:.```````````  oMMMMMMM\n' +
      'sssssssssssssssssssssssyyddh//y-..````.`-osssssssssssssyo:+//+/oys:o:+/+///+//+//+:o:syo:+//+sssssso:o:o:ssssssssssssssssso+//////:.```.-:/-..sMMMMMMM\n' +
      'sssssssssssssssssssssssssydd:.-:..``````-ssssssssssssssyo:+//+/oy:o:o:o:ossyss+/+/+//+so:+//+/////////+/+ssssssssssssssssssyysssyys/`.:+sssssshmmmmmmm\n' +
      'sssssssssssssssssssssssssyyhs.......`````osssssssssssssyo:+//+/oy-s-s-o:sssssss-s-o:o/so:+//+///////:/o-ssssssssssssssssy+-+syyys/-:+osyyssssssssyyyyy\n' +
      'sssssssssssssssssssssssssssss-........---ssssssssssssssyo:+//+/oy/+:o:o:+sssss+/+/+//+yo:+//+++++++//+///ssssssssssssssssso:-/oss/osssyyyyyyyyyyyyyyyy\n' +
      'sssssssssssssssssssssssssssyh/......./hhhyyyssssssssssss+/+//+:oss:o:+////+++/+//+/+:sso:+//+oooooo+:o:+/sssssssssssyyysssso:..:/oss:-+hhhhhhhhhhhhhhh\n' +
      'sssssssssssssssssssssyyyhdmNM/...::..-dMMMNNmmdyyysssso//+:o:o-ssss/+////////////+//ssso:+//++//////+/+:ossssssssss+/////::---------  :hhhhhhhhhhhhhhh\n' +
      'ssssssssssssssssssyhhmNNMMMMM:...dN:..:MMMMMMMMmyysssso/////+:ossssso/////////////osssso/+//+//////////sssssssssssso++//:...........  :hhhhhhhhhhhhhhh\n' +
      'ssssssssssssssssydNMMMMMMMMMM-.../M/...sMMMMMMMMmysssyo/////+sssssssysso+++++++osssssssssssssooooooosssssssssssssyo::///:-......-/+o/:+hhhhhhhhhhhhhhh\n' +
      'sssssssssssssssydMMMMMMMMMMMM.....Nh...-mMMMMMMMMNyysss++oossssssssssssssssssssssssssssssssssssssssssssssssssssssyss+::://--/+ooss/:/oossssssysssyyyyy\n' +
      'ssssssssssssssymMMMMMMMMMMMMN.....mM-...+MMMMMMMMMNhsssssssssssssyy+/-------:://++oyyssssssssssssssssssssssssssssssysoso:/osyys///:::.....---:...hmmmm\n' +
      'ssssssssssyyyhNMMMMMMMMMMMMMN.....yMs....dMMMMMMMMMMdyysssssysyydNN+..-:/+oosssssssssssssssssssssssssssssssssssssssssssssssssso++/:-.`````````   hmmmm\n' +
      'ssssssssssyymMMMMMMMMMMMMMMMM.....oMN-...+MMMMMMMMMMMmyysssyyhmMMMMMhossssssssssssssssssssssssssssssssssssssssssssssssssssssss/:::--.`````````   hmmmm\n' +
      'sssssssssydMMMMMMMNmMMMMMMMMM-..../MMo....NMMMMMMMMMMMMmhyyhNMMMMMMMNhsssssssssssssssssssssssssssssssssssssssssssssssssssssssss/:::-----.```.++++hhhhh\n' +
      'sssssssyhNMMMMMMMmyyNMMMMMMMM/.....MMm....yMMMMMMMMMMMMMMNNMMMMMMMmhyssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyooosssyss+`./ssssssssss\n' +
      'ssssssydMMMMMMMNhyssdMMMMMMMMo.....mMM/.../MMMMMNhmNMMMMMMMMMMMNdyyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssys:./syssssssssss\n' +
      'ssssssdMMMMMMNdyssssyMMMMMMMMs.....hMMh....mMMMMMhyydNMMMMMMMmhysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss/oyssssssssssss\n' +
      'ssssssmMMMMMNysssssssmMMMMMMMm.....oMMM:...oMMMMMNyssydNNMNdyyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssshMMMMMMdysssssshMMMMMMMM/..../MMMy...-MMMMMMhssssyyyyyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssshNMMMMMmysssssyNMMMMMMMh....-MMMN-...hMMMMMNyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssymMMMMMNhyysssdMMMMMMMM-....mMMMo...+MMMMMMhssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssyhNMMMMMNhyssyMMMMMMMMs....hMMMm....NMMMMMNysysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssymMMMMMMNdysmNmhyydNm....:mMMm-...sMMMMMMdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssssssshNMMMMmo:::-.....-/-.....o+.....:MMMMMMNyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'ssssssssssssssyhNMh:-..````````.:/++++ooossyyhMMMMMMMdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssyyhysyso//-----:hMMMMMMMMMMMMMMMMMMMMMNysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssydMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssymMMMMMMMMMMMMMMMMMMMMMMMMMMMNmhsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssydMMMMMMMMMMMMMMMMMMMMMMMMMMhysysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      'sssssssssssssssssssssssyhNNMMMMMMMMMMMMMMMMMMMMMMMMdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n' +
      "</span></code>";

    var blogNode = document.createElement("div");
    blogNode.style.maxWidth = "800px";
    blogNode.innerHTML =
      "<p style='font-size: 24px;'><b>Disclaimer</b> Use your best judgment when making career decisions.</p>" +
      "<p style='font-size: 24px;'><b>TL;DR</b> As a developer know your value and be willing to negotiate with employers to achieve your best quality of life.</p>" +
      "<p>In this article I try to make sense of the developer job market in the US. With over 3.7 million tech jobs posted in 2018  it can seem like chaos. I often lurk on r/cscareerquestions and see developers with ranging levels of skill and experience looking for advice about the job market. For the most part we are all looking for the best quality of life (QoL) we can find in a job. I Define QoL as the intersection of total compensation (TC) and total time invested (TTI) in the job. I believe that for a developer to reach their maximum QOL they must; 1. know their value, 2. demonstrate their value to employers, and 3. negotiate and or change jobs. Below I'll share my experiences on how to accomplish each of these steps, how to increase your value, and explain further how to compare jobs.</p>" +
      "<p class='accent' style='font-size: 24px;'><i>\"3.7 million tech jobs posted in 2018\"</i></p>" +
      "<p style='font-size: 24px;'><b>1. Calculating QoL </b></p>" +
      "<p>Gather up your offer letters, benefits brochures, and coffee. First determine what the total compensation (TC) is by summing up every dollar spent on you by the employer. Add up pay, stock awards, benefits, retirement, HSA, bonuses, and anything else that the employer may offer. I also like to consider intangibles, things like mentorship, or training that you can't put a dollar amount on. Keep them in mind by annotating the TC with notes on intangible offerings.</p>" +
      '<p>Next determine the total time invested (TTI), which is what I call the average number of hours per week that will be spent on work or work related functions. This is more than the 40hrs or whatever that you will be expected to be "on the clock". Be sure to include travel time, any required training that you may be expected to do off hours, events, time to research if you think you will need to be playing "catch-up",  business development activities, and last but not least "de-stress time" which is what I call the time needed to wind down from a days work.</p>' +
      "<p>Once you have both of these numbers divide the TC by TTI to get your QoL quotient (QoLQ) carry over the annotations for non tangible additions for TC. For example if you have determined TC is 100,000 with an annotation for mentorship (Mn) and TTI is 40 then your QoLQ is (100/40)Mn, which is 2,500Mn. It takes some work to break down into a QoLQ but the pay off is a formula for comparing offers.</p>" +
      "<p style='font-size: 24px;'><b>2. Know Your Value </b></p>" +
      "<p>This one seems obvious, but due to the stigma about sharing pay information in the office, if you don't do a little research you risk not knowing what others with similar expierience, skills, and location are getting paid. The easiest thing to do here is ask your peers, the more the better, what their compensation is. If you don't feel uncomfotable asking, or you don't have anyone to ask, go online to forums like r/cscareerquestions and post asking others. Important factors to consider are; location, salary, PTO, and benefits.  </p>" +
      "<p style='font-size: 24px;'><b>3. Demonstrate Value </b></p>" +
      "<p>Employers will be a lot more open to negotiating when you have clearly demonstrated the value that you can provide. There are many ways to demonstrate value, but regardless of your skills, you want to have a documented track record of delivering on them. For example if you are a high velocity developer, you want to have something that you can point to and say \"I accomplished X, Y, and Z before the product deadline\". If you are more of a technical leader, you want to have a history of projects that you have lead to sucess with tangible results, like positive feedback from customers, or insentive bonuses met. You're selling yourself,  a proven track record speaks louder than words, or (IMO) a technical interview. If you don't have these things you should start working on them! </p>" +
      "<p class='accent' style='font-size: 24px;'><i>\"you want to have a documented track record of delivering\"</i></p>" +
      "<p style='font-size: 24px;'><b>4. Negotiate </b></p>" +
      "<p>Once you know your value, and have demonstrated it, you are in good shape to go get your maximum QoL job. This is the easy part, if you are happy with your current employer begin a negotiation process by letting your manager know what it is you believe your compensation should be, and use your track record of demonstrating value as leverage. If you would like to test the market,  get your resume out there and let the offers role in! Armed with your research of the market and your demonstrated value be upfront with prospective employers about what you are looking for and why you are worth it. </p>";

    var connectNode = document.createElement("p");
    connectNode.classList.add("ask-alex");
    connectNode.innerHTML =
      "Thanks for reading. For help with this site or to check out its progress go here: ";

    var repositorylinkNode = document.createElement("a");
    repositorylinkNode.setAttribute("href", "https://github.com/agoley/agoley");
    repositorylinkNode.innerText = "https://github.com/agoley/agoley";

    var linkedinNode = document.createElement("p");
    linkedinNode.innerText = "Connect with me on LinkedIn: ";

    var linkedinLinkNode = document.createElement("a");
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
    logRef.appendChild(askingNode);
    logRef.appendChild(asciiJobNode);
    logRef.appendChild(blogNode);
    logRef.appendChild(connectNode);

    document.getElementById("DomHook").appendChild(logRef);
  }
}
