export class Logs {
  constructor() {}

  displayNikeInvincibleFlynitReviewLog() {
    const logRef = document.createElement("div");
    logRef.classList.add("log-body");

    const logHeaderRef = document.createElement("h1");
    logHeaderRef.innerHTML = "Nike ZoomX Invincible Run Flyknit Review.";
    const uploadedOnDivDivRef = document.createElement("div");
    uploadedOnDivDivRef.innerHTML = "Posted: May 01, 2021";
    const updatedOnDivDivRef = document.createElement("div");
    updatedOnDivDivRef.innerHTML = "Last Updated: May 01, 2021";

    const shoeImgFrameRef = document.createElement("div");
    shoeImgFrameRef.className = "media-frame";
    const imgFrameHeaderRef = document.createElement("div");
    imgFrameHeaderRef.innerHTML = "<span>Image Viewer</span>";
    shoeImgFrameRef.appendChild(imgFrameHeaderRef);

    const highKneesVideoFrameRef = document.createElement("div");
    highKneesVideoFrameRef.className = "media-frame";
    const videoFrameHeaderRef = document.createElement("div");
    videoFrameHeaderRef.innerHTML = "<span>Media Player</span>";
    highKneesVideoFrameRef.appendChild(videoFrameHeaderRef);

    const video2FrameRef = document.createElement("div");
    video2FrameRef.className = "media-frame";
    const video2FrameHeaderRef = document.createElement("div");
    video2FrameHeaderRef.innerHTML = "<span>Media Player</span>";
    video2FrameRef.appendChild(video2FrameHeaderRef);

    const video1Ref = document.createElement("video");
    video1Ref.width = "800";
    video1Ref.controls = true;
    video1Ref.autoplay = true;
    video1Ref.muted = true;
    video1Ref.loop = true;
    video1Ref.innerHTML =
      '<source src="assets/video/IMG_1287.MOV"" type="video/mp4">';
    highKneesVideoFrameRef.appendChild(video1Ref);

    const video2Ref = document.createElement("video");
    video2Ref.width = "800";
    video2Ref.controls = true;
    video2Ref.autoplay = true;
    video2Ref.muted = true;
    video2Ref.loop = true;
    video2Ref.innerHTML =
      '<source src="assets/video/IMG_1288.MOV"" type="video/mp4">';
    video2FrameRef.appendChild(video2Ref);

    const imgRef = document.createElement("img");
    imgRef.width = "800";
    imgRef.src = "assets/images/IMG_1265.JPG";

    shoeImgFrameRef.appendChild(imgRef);

    const blogNode1 = document.createElement("div");
    blogNode1.style.maxWidth = "800px";
    blogNode1.innerHTML =
      "<p style='font-size: 24px;'><b>TL;DR</b> 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ (4/5) Strides. There's not much to dislike about the Nike ZoomX Invincible Run Flyknit. I deducted a stride for stability and style, but these deliver what I want from an every day running shoe.</p>" +
      '<p>Nike claims this is "one of our most tested shoes" and offers a cushioned Flynit upper on top of a luxurious full length bed of ZoomX foam. By design it promises to be a great daily runner, meant to go easy on your knees for long runs on hard surfaces. I personally was looking for maximum support to cut down on recovery days and up weekly mileage. So does this shoe deliver?</p>' +
      "<p>After seeing the marketing for the Nike ZoomX Invincible Run Flyknit, I was hooked by the ample ZoomX cushioning and was anticipating giving them a try as my pegasus turbo 2 where starting to reach their end of life. I ordered from the Nike app on March 15th, and received them a week later on March 22nd. Since then I've put about 50 mi on them in various conditions and surfaces and feel I have a good understanding of what these deliver. Below I will rate the attributes I look for in a running shoe and give an overall score.</p>" +
      "<p style='font-size: 24px;'><b>Responsiveness</b></p>" +
      "<p>Just from looking at these you might have high expectations for the responsiveness. The shoe sits on a luxuriant ZoomX midsole measuring (2 in) tall by (4.25 in) wide at the mid heel and (1.5 in) tall by (5.5 in) wide at the forefoot. Before even hitting the pavement in these I could tell these are different just from trying them on. The initial feeling is a forward leaning bounce that makes me want to get on a track and go. Some other shoes have a bounce to them but from my experience these are in a class of their own. I even tried them on in a gym out of curiosity and these add an extra (3 - 5 in) to my vertical as compared to my usual Jordan 14's (Zoom unit forefoot). After taking them to the pavement I can confirm that the responsiveness is great and the feeling persists for the entire run. </p>";

    const blogNode2 = document.createElement("div");
    blogNode2.style.maxWidth = "800px";
    blogNode2.innerHTML =
      "<p style='font-size: 24px;'><b>Stability</b></p>" +
      "<p>My initial impression after putting these on and walking, was that stability would be a problem, there is so much responsiveness that just walking around feels like I could easily roll an ankle. I would actually warn that if you intend on walking a lot in them, they might not be the best option. However once you get moving, my concerns about stability were left behind. Once at a jog they become much more stable. Also as I broke them in I felt like they became more stable.</p>" +
      "<p style='font-size: 24px;'><b>Comfort</b></p>" +
      "<p>If you have ever worn a Flynit shoe you know that the upper is very soft and breathable. With added padding around the ankle I haven’t experienced any chaffing around the ankle. Under foot these are extremely soft and your foot will sink into the foam just slightly.</p>" +
      "<p style='font-size: 24px;'><b>Traction</b></p>" +
      "<p>Traction on these is fine. Down steep hills, and around tight corners in the rain I haven’t experienced any slipping. Also the traction still feels like new at the ~50 mi mark.</p>" +
      "<p style='font-size: 24px;'><b>Speed</b></p>" +
      "<p>They’re surprisingly light with all the foam and added padding in the upper. Combine the responsiveness with a decent drop (0.5 in) from heel to toe these will propel you forward. There is no plate in the sole, just 100% foam. These aren’t designed for speed but for a max comfort shoe they won’t hurt your pace much if you decided to pick it up.</p>";
    const blogNode3 = document.createElement("div");
    blogNode3.style.maxWidth = "800px";
    blogNode3.innerHTML =
      "<p style='font-size: 24px;'><b>Style</b></p>" +
      "<p>These aren’t the type of runners that can double as streetwear like Addidas Ultraboosts. However, for a daily runner I think they look fine. There are three color ways at the time of writing this, I like the white/racer blue.</p>" +
      "<p style='font-size: 24px;'><b>Verdict</b></p>" +
      "<p>🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️ (4/5) Strides</br></br> There's not much to dislike about the Nike ZoomX Invincible Run Flyknit. I deducted a stride for stability and style, but these deliver what I want from an every day running shoe. </p>";

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
    logRef.appendChild(shoeImgFrameRef);
    logRef.appendChild(blogNode1);
    logRef.appendChild(video2FrameRef);
    logRef.appendChild(blogNode2);
    logRef.appendChild(highKneesVideoFrameRef);
    logRef.appendChild(blogNode3);
    logRef.appendChild(connectNode);

    document.getElementById("DomHook").appendChild(logRef);
  }

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
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyyysssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyysssssyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyysssssssssssssssssssssssyyssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyssssssssssssssssssssssyysssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssysssssssyyyysssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyyssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssssssssyyyyyyyyysssssssssssssssssssssssssssssssysssyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssssssyhddddddddhsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssysssyssssssssssssssssssss\n" +
      "sssssssssssssssssssssssysyhddddddhyo+ssysssssssssssssssssssssssssssssssyssssssssssssssssssssssssssssssssssssssssssssssssssss+os/::+sysssssssssssssssss\n" +
      "sssssssssssssssssssssssyydddddddh/..`.oysssssssssssssssssossssossssssss++++++++ossssssssooooooooooooosssssssssssssssssssssss+::-::..-://+sso++yddddddd\n" +
      "ssssssssssssssssssssssyshdddddy:-.`-/-:ssssssssssssssssyo:+//+/ossss+/+///////////osysso:+/////////////sssssssssssssssssys::::::.```````...`  oMMMMMMM\n" +
      "sssssssssssssssssssssssyhddddds...`.-..-+ssssssssssssssyo:+//+/oyso/+//+///////+//+/ssso:+/+////////+/+:ossssssssssssssssso+///:.```````````  oMMMMMMM\n" +
      "sssssssssssssssssssssssyyddh//y-..````.`-osssssssssssssyo:+//+/oys:o:+/+///+//+//+:o:syo:+//+sssssso:o:o:ssssssssssssssssso+//////:.```.-:/-..sMMMMMMM\n" +
      "sssssssssssssssssssssssssydd:.-:..``````-ssssssssssssssyo:+//+/oy:o:o:o:ossyss+/+/+//+so:+//+/////////+/+ssssssssssssssssssyysssyys/`.:+sssssshmmmmmmm\n" +
      "sssssssssssssssssssssssssyyhs.......`````osssssssssssssyo:+//+/oy-s-s-o:sssssss-s-o:o/so:+//+///////:/o-ssssssssssssssssy+-+syyys/-:+osyyssssssssyyyyy\n" +
      "sssssssssssssssssssssssssssss-........---ssssssssssssssyo:+//+/oy/+:o:o:+sssss+/+/+//+yo:+//+++++++//+///ssssssssssssssssso:-/oss/osssyyyyyyyyyyyyyyyy\n" +
      "sssssssssssssssssssssssssssyh/......./hhhyyyssssssssssss+/+//+:oss:o:+////+++/+//+/+:sso:+//+oooooo+:o:+/sssssssssssyyysssso:..:/oss:-+hhhhhhhhhhhhhhh\n" +
      "sssssssssssssssssssssyyyhdmNM/...::..-dMMMNNmmdyyysssso//+:o:o-ssss/+////////////+//ssso:+//++//////+/+:ossssssssss+/////::---------  :hhhhhhhhhhhhhhh\n" +
      "ssssssssssssssssssyhhmNNMMMMM:...dN:..:MMMMMMMMmyysssso/////+:ossssso/////////////osssso/+//+//////////sssssssssssso++//:...........  :hhhhhhhhhhhhhhh\n" +
      "ssssssssssssssssydNMMMMMMMMMM-.../M/...sMMMMMMMMmysssyo/////+sssssssysso+++++++osssssssssssssooooooosssssssssssssyo::///:-......-/+o/:+hhhhhhhhhhhhhhh\n" +
      "sssssssssssssssydMMMMMMMMMMMM.....Nh...-mMMMMMMMMNyysss++oossssssssssssssssssssssssssssssssssssssssssssssssssssssyss+::://--/+ooss/:/oossssssysssyyyyy\n" +
      "ssssssssssssssymMMMMMMMMMMMMN.....mM-...+MMMMMMMMMNhsssssssssssssyy+/-------:://++oyyssssssssssssssssssssssssssssssysoso:/osyys///:::.....---:...hmmmm\n" +
      "ssssssssssyyyhNMMMMMMMMMMMMMN.....yMs....dMMMMMMMMMMdyysssssysyydNN+..-:/+oosssssssssssssssssssssssssssssssssssssssssssssssssso++/:-.`````````   hmmmm\n" +
      "ssssssssssyymMMMMMMMMMMMMMMMM.....oMN-...+MMMMMMMMMMMmyysssyyhmMMMMMhossssssssssssssssssssssssssssssssssssssssssssssssssssssss/:::--.`````````   hmmmm\n" +
      "sssssssssydMMMMMMMNmMMMMMMMMM-..../MMo....NMMMMMMMMMMMMmhyyhNMMMMMMMNhsssssssssssssssssssssssssssssssssssssssssssssssssssssssss/:::-----.```.++++hhhhh\n" +
      "sssssssyhNMMMMMMMmyyNMMMMMMMM/.....MMm....yMMMMMMMMMMMMMMNNMMMMMMMmhyssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyooosssyss+`./ssssssssss\n" +
      "ssssssydMMMMMMMNhyssdMMMMMMMMo.....mMM/.../MMMMMNhmNMMMMMMMMMMMNdyyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssys:./syssssssssss\n" +
      "ssssssdMMMMMMNdyssssyMMMMMMMMs.....hMMh....mMMMMMhyydNMMMMMMMmhysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss/oyssssssssssss\n" +
      "ssssssmMMMMMNysssssssmMMMMMMMm.....oMMM:...oMMMMMNyssydNNMNdyyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssshMMMMMMdysssssshMMMMMMMM/..../MMMy...-MMMMMMhssssyyyyyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssshNMMMMMmysssssyNMMMMMMMh....-MMMN-...hMMMMMNyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssymMMMMMNhyysssdMMMMMMMM-....mMMMo...+MMMMMMhssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssyhNMMMMMNhyssyMMMMMMMMs....hMMMm....NMMMMMNysysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssymMMMMMMNdysmNmhyydNm....:mMMm-...sMMMMMMdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssssssshNMMMMmo:::-.....-/-.....o+.....:MMMMMMNyssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "ssssssssssssssyhNMh:-..````````.:/++++ooossyyhMMMMMMMdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssyyhysyso//-----:hMMMMMMMMMMMMMMMMMMMMMNysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssydMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssymMMMMMMMMMMMMMMMMMMMMMMMMMMMNmhsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssydMMMMMMMMMMMMMMMMMMMMMMMMMMhysysssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "sssssssssssssssssssssssyhNNMMMMMMMMMMMMMMMMMMMMMMMMdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss\n" +
      "</span></code>";

    var blogNode = document.createElement("div");
    blogNode.style.maxWidth = "800px";
    blogNode.innerHTML =
      "<p style='font-size: 24px;'><b>Disclaimer</b>  Be sure to use your best judgment when making career decisions</p>" +
      "<p style='font-size: 24px;'><b>TL; DR</b> As a developer, know your value and be willing to negotiate with employers in order to achieve your best quality of life.</p>" +
      "<p>In this article, I'll try to make sense of the developer job market in the US. With over 3.7 million tech jobs posted in 2018, it can seem chaotic. I often lurk on r/cscareerquestions and see developers with ranging levels of skills and experience looking for advice on the job market. For the most part, we are all looking for the best quality of life (QoL) we can find in a job. I define QoL as the correlation of total compensation (TC) and total time invested (TTI) in the job. I believe that for a developer to reach their maximum QoL, they must; 1. know their value, 2. demonstrate their value to employers, and 3. negotiate and/or change jobs. Below, I'll share my experiences on how to accomplish each of these steps, how to increase your value, and also explain further on how to compare jobs.</p>" +
      "<p class='accent' style='font-size: 24px;'><i>\"3.7 million tech jobs posted in 2018\"</i></p>" +
      "<p style='font-size: 24px;'><b>1. Calculating QoL </b></p>" +
      "<p>Gather up your offer letters, benefits brochures, and coffee. First, determine what the total compensation (TC) is by summing up every dollar spent on you by the employer. Add the pay, stock awards, benefits, retirement, HSA, bonuses, and anything else that the employer might have offered. I also like to consider intangibles such as mentorship or training. Keep them in mind by annotating the TC with notes on intangible offerings.</p>" +
      '<p>Next, determine the total time invested (TTI), which is what I call the average number of hours per week that will be spent on work or work-related functions. This is more than the 40 hours or whatever that you will be expected to be "on the clock". Be sure to include travel time, required training that you may be expected to do off hours, events, time to research if you think you will need to be playing "catch-up", business development activities, and last but not least, "de-stress time". This is what I call the time needed to wind down from a day\'s work.</p>' +
      "<p>Once you have both numbers, divide the TC by TTI to get your QoL quotient (QoLQ). Then, carry over the annotations for non-tangible additions for TC. For example, if you have determined that TC is $100,000 with an annotation for mentorship (Mn), and TTI is 40 hours, then your QoLQ is (100,000/40)Mn, which is 2,500Mn. It takes some work to derive a QoLQ, but the end result is one number that encapsulates the total package.</p>" +
      "<p style='font-size: 24px;'><b>2. Know Your Value </b></p>" +
      "<p>This one seems obvious, but due to the stigma of sharing income in the office, many people don't know what their peers are making. You'll have to do a little research here. The easiest thing to do is to ask your peers, the more the better, what their compensation is. If you feel uncomfortable asking or you don't have anyone to ask, visit online forums like r/cscareerquestions and post, asking others. Important factors to consider are location, salary, PTO, and benefits.</p>" +
      "<p style='font-size: 24px;'><b>3. Demonstrate Value </b></p>" +
      '<p>Employers will be more open to negotiating when you have clearly demonstrated the value you can provide. There are several ways to demonstrate value, but regardless of your skills, you want to have a documented track record of delivery on them. For example, if you are a high velocity developer, you want to say "I accomplished X, Y, and Z before the product deadline." If you are more of a technical leader, provide a history of projects that you have led to measurable success such as positive feedback from customers or incentive bonuses met. You\'re selling yourself and a proven track record speaks louder than words or a technical interview. If you do not have these things, start working on them!</p>' +
      "<p class='accent' style='font-size: 24px;'><i>\"you want to have a documented track record of delivering\"</i></p>" +
      "<p style='font-size: 24px;'><b>4. Negotiate </b></p>" +
      "<p>Once you know your value and have demonstrated it, you are in good shape to get your maximum QoL job. If you're happy with your current employer, begin a negotiation process by letting your manager know what you believe your compensation should be. Then, use your track record of demonstrating value as leverage. If you would like to test the market, get your resume out there and let the offers role in! Armed with your research of the market and demonstrated value, be upfront with prospective employers about what you are looking for and why you are worth it.</p>";

    var connectNode = document.createElement("p");
    connectNode.classList.add("ask-alex");
    connectNode.innerHTML =
      "Thanks for reading. For help with this site or to check out its progress go follow this link: ";

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
