      function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
      let slideIndex = 0;
      showSlides();
      
      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }
      const createFooter = () => {
        let footer = document.querySelector('footer');
    
        footer.innerHTML = `
        <p class="footer-title">about college</p>
        <p class="info">इस संस्था का शुभारम्भ 1975 अक्टूबर माह में सीमान्त जनपद पिथौरागढ़ के फर्नहिल नाम के स्थित किराये के भवनों में हुआ। आरम्भ में इस संस्था में त्रिवर्षीय डिप्लोमा सिविल अभियन्त्रण तथा द्विवर्षीय स्टैनोग्राफी एण्ड सेकेट्रियल प्रेक्टिस डिप्लोमा पाट्यक्रम 30-30 प्रवेश क्षमता के साथ प्रारम्भ किये गये। सत्र 1984-85 से संस्था में त्रिवर्षीय विद्युत अभियंत्रण डिप्लोमा पाठ्यक्रम 30 प्रवेश क्षमता के साथ प्रारम्भ हुआ। जिसको वर्ष 1986-87 से इलैक्ट्रोनिक्स इंजीनियरिंग डिप्लोमा पाठ्यक्रम 30 में समावेशित कर दिया गया। सत्र 1985-86 से संस्था में द्विवर्षीय डिप्लोमा फार्मेसी पाठ्यक्रम 30 प्रवेश क्षमता के साथ प्रारम्भ किया गया। तथा वर्ष 2002-03 से त्रिवर्षीय सूचना प्रोद्योगिक डिप्लोमा पाठ्यक्रम प्रारम्भ हुआ।
    
          संस्था में तकनीकी शिक्षा के अन्तर्गत अभियान्त्रिकी जैसे- सिविल, इलैक्ट्रोनिक्स, सूचना प्रौद्योगिकी जैसे अभियन्त्रण शाखाएं व फार्मेसी की अभियन्त्रण उत्तर शाखा एवं एम. ओ. एम. एण्ड सैकेट्रियल प्रैक्टिस शाखाओं में क्रमशः त्रिवर्षीय व द्विवर्षीय डिप्लोमा प्रदान करने की शिक्षा प्रदान की जाती है। अभियन्त्रण पाठ्यक्रमों का संचालन भारतीय तकनिकी शिक्षा परिषद (एआईसीटीई) तथा फार्मेसी पाठ्यक्रम का संचालन भारतीय भेषज परिषद (पीसीआई) द्वारा निर्धारित मानकों के आधार पर किया जाता है। वार्षिक परीक्षाओं तथा प्रवेश परीक्षा का संचालन तथा अघ्ययनोपरान्त पत्रापादिउपधि (डिप्लोमा) प्रदान करने का कार्य उत्तराखण्ड शासन द्वारा गठित उत्तराखण्ड प्राविधिक शिक्षा परिषद, रुड़की द्वारा किया जाता है। इस परिषद का एक और मुख्य कार्य संस्थाओं में विभिन्न अभियन्त्रण शाखाओं के लिए पाठ्यचर्या का निर्धारण व संसोधन भी है जबकि फार्मेसी से सम्बन्धित पाठ्यचर्या का कार्य भारतीय भेषज परिषद (पीसीआई) करती है। </h1>
      </p>
        <p class="info">support emails - gplohaght@gmail.com, lohaghat@gmail.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div> 
                <a href="#" class="social-link">facebook</a>
            </div>
        </div>
        <p class="footer-credit">Information Technology</p> `;
    }
    
    createFooter();