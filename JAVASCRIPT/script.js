window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"
})




window.onload = function() {
    // 🎭 <!-- FOR Change Light to Dark -->
    const changeLightsbutton = document.getElementById('changeLightsbutton');
    changeLightsbutton.addEventListener('change',()=>{
        // change theme
        document.body.classList.toggle('light');
    });



    // 🎭 <!-- FOR Change languages -->
    /***** 1.created languages array */
    let languages = {
        'english' : {'Home': "Home", 'About' : "About", 'Skills' : "Skills", 'Contact' : "Contact", 'whoIAM' : "Who I am ?",'whoIAM2' : "I am a Web Designer & Frontend Developer", 'titleOfAboutMe' : "about me", 'contentOfAboutMe' : "My name is Gunay, I am a Web designer and a Frontend developer.I like to create interesting, high quality and remarkable designs by combining people's dreams with my own imagination. At the same time, I like to find solutions for logistics issues, which is another aspect of my job that I love. HTML, CSS, JavaScript are my best friends which help I can develop new things in all these subjects. At the same time, I usually prefer to design logos, background images and other visual types that I need myself. Therefore, I also know well how to use Photoshop and other image design frameworks.", 'titleOfMySertification' : "My certificates", 'titleOfPhotoGallery' : "My Handworks' Photo Gallery", 'explainSectionCVContent' : "Check my Resume/CV", 'up':"↑ Up", 'pageRights' : "© 2021. All rights reserved", 'titleOfContactInformation' : "My Contact informations:"  },
        'chinese' : {'Home': "主页", 'About' : "关于我", 'Skills' : "技能", 'Contact' : "联系", 'whoIAM' : "我是谁 ?",'whoIAM2' : "我是一名网页设计师和前端开发人员", 'titleOfAboutMe' : "关于我", 'contentOfAboutMe' : "我中文名叫 古娜伊，我是一名网页设计师和前端开发人员。我喜欢创建将人们的梦想与我自己的想象相结合，有趣、高质量和卓越的设计。同时，我喜欢为物流问题寻找解决方案，这是我工作的另一个方面。HTML、CSS、JavaScript 是我最好的朋友这有助于我在所有这些学科中开发新事物。同时，我通常更喜欢设计自己需要的标志、背景图像和其他视觉类型。因此，我也知道如何使用 Photoshop 和其他图像设计框架.", 'titleOfMySertification' : "我的证书", 'titleOfPhotoGallery' : "我的手工艺品的照片库", 'explainSectionCVContent' : "查看我的简历", 'up':"↑ 向上", 'pageRights' : "© 2021.  保留所有权利", 'titleOfContactInformation' : "我的联系方式:"  }
    }

    /***** 2.taked switch Button */
    const switchLanguageButton = document.getElementById('changeLanguagesbutton');

    /***** 3.added event listener to button */
    switchLanguageButton.addEventListener('change',()=>{
        /***** 4.toggled body's class to chinese */
        document.body.classList.toggle('chinese');
        /***** 5.changed images */        
        // ANIMATION-AVATAR img****
        const animationAvatar = document.getElementsByClassName('animationAvatar');
        animationAvatar[0].classList.toggle('animationAvatarChinese');
        // SKILLS img****
        const contentOfSkills = document.getElementsByClassName('contentOfSkills');
        contentOfSkills[0].classList.toggle('contentOfSkillsChinese');
        /***** 6.taked needed elements. which used in condition on below */        
        // whoiam
        const whoIAMs= document.querySelectorAll(".whoIAM > h1, .whoIAM > span");    
        // about me
        const titleOfAboutMeSection = document.querySelectorAll('.titleOfAboutMe > h3, .contentOfAboutMe > h4');
        // navbars
        const navLinksEnglish= document.querySelectorAll(".centerNav > a");
        const navLinksChinese= document.querySelectorAll(".centerNav > a");
        // sertifications, photo gallery and resume titles
        const titles= document.querySelectorAll(".titleOfMySertification > h3, .titleOfPhotoGallery > h3, .explainSectionCVContent > a > span");       
        // bottom-section
        const bottomSection= document.querySelectorAll(".scrollToUp > a > h3, .pageRights > h3, .titleOfContactInformation > h3");
        /***** 7.maked condition and changes elements' inside languages */        
        if (document.body.classList.contains('chinese')) {
            // change language to chinese on NAVBAR
            navLinksChinese[0].innerHTML = languages.chinese.Home;
            navLinksChinese[1].innerHTML = languages.chinese.About;
            navLinksChinese[2].innerHTML = languages.chinese.Skills;
            navLinksChinese[3].innerHTML = languages.chinese.Contact;
            //WHOIAM
            whoIAMs[0].innerHTML = languages.chinese.whoIAM;
            whoIAMs[1].innerHTML = languages.chinese.whoIAM2; 
            //ABOUT ME
            titleOfAboutMeSection[0].innerHTML = languages.chinese.titleOfAboutMe;             
            titleOfAboutMeSection[1].innerHTML = languages.chinese.contentOfAboutMe;
            // SERTIFICATIONS, PHOTO GALLERY and RESUME titles
            titles[0].innerHTML = languages.chinese.titleOfMySertification;
            titles[1].innerHTML = languages.chinese.titleOfPhotoGallery;
            titles[2].innerHTML = languages.chinese.explainSectionCVContent;
            // BOTTOM-SECTION
            bottomSection[0].innerHTML = languages.chinese.up;
            bottomSection[1].innerHTML = languages.chinese.pageRights;
            bottomSection[2].innerHTML = languages.chinese.titleOfContactInformation;
        } else {
            const navLinksChinese= document.querySelectorAll(".centerNavChinese > a");
            // change language to english on NAVBAR
            navLinksEnglish[0].innerHTML = languages.english.Home;
            navLinksEnglish[1].innerHTML = languages.english.About;
            navLinksEnglish[2].innerHTML = languages.english.Skills;
            navLinksEnglish[3].innerHTML = languages.english.Contact;
            //WHOIAM
            whoIAMs[0].innerHTML = languages.english.whoIAM;
            whoIAMs[1].innerHTML = languages.english.whoIAM2;
            //ABOUT ME
            titleOfAboutMeSection[0].innerHTML = languages.english.titleOfAboutMe;
            titleOfAboutMeSection[1].innerHTML = languages.english.contentOfAboutMe;
            // SERTIFICATIONS, PHOTO GALLERY and RESUME titles
            titles[0].innerHTML = languages.english.titleOfMySertification;
            titles[1].innerHTML = languages.english.titleOfPhotoGallery;
            titles[2].innerHTML = languages.english.explainSectionCVContent;
            // BOTTOM-SECTION
            bottomSection[0].innerHTML = languages.english.up;
            bottomSection[1].innerHTML = languages.english.pageRights;
            bottomSection[2].innerHTML = languages.english.titleOfContactInformation;
        }         
    });

    


    // 🎭 <!-- FOR AUTO SLIDE PICTURES -->
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    const img = document.getElementsByClassName('handworksPhotos')[0];
    
    //Slide images INFO
    const information = document.getElementById("picturesInformation");
    const imgArray = ["/images/handmadeGallery/Picture2.jpg", "/images/handmadeGallery/Picture3.jpg", "/images/handmadeGallery/Picture4.jpg", "/images/handmadeGallery/Picture5.jpg", "/images/handmadeGallery/Picture6.jpg", "/images/handmadeGallery/Picture7.jpg", "/images/handmadeGallery/Picture8.jpg", "/images/handmadeGallery/Picture9.jpg"];

    let index = 0;

    information.innerHTML = "There are " +imgArray.length +  " pictures in total and this is the " + (index+1);

    previous.onclick = function(){
        index--;
        if(index < 0){
            index = imgArray.length - 1;
        }
        img.src = imgArray[index];
        if (document.body.classList.contains('chinese')) {
            information.innerHTML = "总共有 " +imgArray.length +  "张图片，这是第 " + (index+1);
        } else {
            information.innerHTML = "There are " +imgArray.length +  " pictures in total and this is the " + (index+1);
        }
    };
    next.onclick = function(){
        index++;
        if(index > imgArray.length - 1){
            index = 0;
        }
        img.src = imgArray[index];
        if (document.body.classList.contains('chinese')) {
            information.innerHTML = "总共有 " +imgArray.length +  "张图片，这是第 " + (index+1);
        } else {
            information.innerHTML = "There are " +imgArray.length +  " pictures in total and this is the " + (index+1);
        }
    };
    autoPlus = function(){
        index++;
        if(index > imgArray.length - 1){
            index = 0;
        }
        img.src = imgArray[index];
        if (document.body.classList.contains('chinese')) {
            information.innerHTML = "总共有 " +imgArray.length +  "张图片，这是第 " + (index+1);
        } else {
            information.innerHTML = "There are " +imgArray.length +  " pictures in total and this is the " + (index+1);
        }
    };

    setInterval(() => {
        autoPlus();
    }, 3000);
}

// 🎭 <!-- FOR SCROLL PAGE SECTIONS ANIMATION -->
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.getElementsByClassName('revealSections');
    for (let index = 0; index < reveals.length; index++) {
        let windowsHeight = window.innerHeight;
        let revealTop = reveals[index].getBoundingClientRect().top;
        let revealPoint = 100;
        // console.log(revealTop);
        if (revealTop < windowsHeight - revealPoint) {
                reveals[index].classList.add('activeReveal');
            } else {
                reveals[index].classList.remove('activeReveal');
        }
    }    
}



//  🎭 <!-- FOR COVER ANIMATION SECTION -->
const welcomingSection = document.getElementsByClassName('welcomingSection');
function welcomingSectionClick () {
    welcomingSection[0].classList.toggle('welcomingSectionClick');
}
const whoIAmSectionAndMyPhoto = document.getElementsByClassName('whoIAmSectionAndMyPhoto');
function welcomingSectionTurnBackClick () {
    welcomingSection[0].classList.remove('welcomingSectionClick');
}