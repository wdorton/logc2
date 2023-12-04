function trackbuttons () {
    event.preventDefault()
    document.getElementById("unitabackgroundcircle").style.display = "block";
    document.getElementById("unitadashboard").style.display = "block";
    document.getElementById("aviewlabel").style.display = "block";
    document.getElementById("unitareports").style.display = "block";
    document.getElementById("ainputlabel").style.display = "block";
    document.getElementById("unitarequests").style.display = "block";
    document.getElementById("arequestslabel").style.display = "block";
    document.getElementById("unitatools").style.display = "block";
    document.getElementById("atoolslabel").style.display = "block";
    document.getElementById("closeunitabutton").style.display = "block";
    document.getElementById("unitabox").style.backgroundColor = "lime";
    };
  
    const frontDivs = document.querySelectorAll('.front-div');
  
    frontDivs.forEach(div => {
      div.addEventListener('click', function() {
        frontDivs.forEach(d => d.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
  function displayunitspecificoptions() {
    event.preventDefault;
    var selectedOption = document.getElementById('chooseunit').value;
    var displayoptionbar = document.getElementById('topbar');
    var displayexit = document.getElementById('closetopbar');
    var highlightunit = document.getElementById('unitabox');
    var highlightselect = document.getElementById('chooseunit');
    switch (selectedOption) {
      case 'option1':
        displayoptionbar.style.display = "flex";
        displayexit.style.display = "block";
        highlightunit.style.backgroundColor = "lime";
        highlightselect.style.color = "lime";
        highlightselect.style.opacity = "1";
        default:
          displayTextDiv.innerText = '';
        break;
    }};
  
    function displayreports() {
      event.preventDefault;
      var selectedOption = document.getElementById('updateoptions').value;
      var displaysupply = document.getElementById('supplyupdateform');
      var displayequipment = document.getElementById('equipmentupdateform');
      var displaypersonnel = document.getElementById('personnelupdateform');
      switch (selectedOption) {
        case 'option1':
          displaysupply.style.display = "block";
          displaypersonnel.style.display = "none";
          displayequipment.style.display = "none";
          break;
        case 'option2':
          displaysupply.style.display = "none";
          displaypersonnel.style.display = "none";
          displayequipment.style.display = "block";
          break;
        case 'option3':
          displaysupply.style.display = "none";
          displaypersonnel.style.display = "block";
          displayequipment.style.display = "none";
          break;
          default:
            displayTextDiv.innerText = '';
          break;
    }};
  
  function displayreports1() {
    event.preventDefault;
    var selectedOption = document.getElementById('inputformslist').value;
    var displaysupply = document.getElementById('supplyupdateform');
    var displayequipment = document.getElementById('equipmentupdateform');
    var displaypersonnel = document.getElementById('personnelupdateform');
    switch (selectedOption) {
      case 'option1':
        displaysupply.style.display = "block";
        displaypersonnel.style.display = "none";
        displayequipment.style.display = "none";
        break;
      case 'option2':
        displaysupply.style.display = "none";
        displaypersonnel.style.display = "none";
        displayequipment.style.display = "block";
        break;
      case 'option3':
        displaysupply.style.display = "none";
        displaypersonnel.style.display = "block";
        displayequipment.style.display = "none";
        break;
        default:
          displayTextDiv.innerText = '';
        break;
  }};
  
  
  function showinputforms () {
  document.getElementById("inputformslist").style.display = "block";
  document.getElementById("closereportsdropdown").style.display = "block";
  };
  
  function closereportsdiv () {
    document.getElementById("inputformslist").style.display = "none"; 
    document.getElementById("closereportsdropdown").style.display = "none";
  }
  
  function showtools () {
    document.getElementById("toolsformslist").style.display = "block";
    document.getElementById("closetoolsdropdown").style.display = "block";
    };
  
  function closetoolsdiv () {
    document.getElementById("toolsformslist").style.display = "none"; 
    document.getElementById("closetoolsdropdown").style.display = "none";
  }
  
  function closetopbar1() {
    document.getElementById("topbar").style.display = "none"; 
    document.getElementById("closetopbar").style.display = "none";
  }
  
  function closeunitabuttondiv() {
    document.getElementById("unitadashboard").style.display = "none"; 
    document.getElementById("unitatools").style.display = "none"; 
    document.getElementById("unitareports").style.display = "none"; 
    document.getElementById("unitarequests").style.display = "none"; 
    document.getElementById("closeunitabutton").style.display = "none";
    document.getElementById("unitabox").style.backgroundColor = "rgb(0, 191, 255)";
  }
  
  function showdashboard () {
    document.getElementById("adashboard").style.display = "block";
    };
  
  function showwaterupdateform () {
  event.preventDefault()
  document.getElementById("waterupdateform").style.display = "block";
  document.getElementById("waterupdate").style.color = "yellow";
  document.getElementById("waterupdate").style.backgroundColor = "black";
  document.getElementById("waterupdate").style.borderColor = "yellow";
  
  };
  
  function showfoodupdateform () {
    event.preventDefault()
    document.getElementById("foodupdateform").style.display = "block";
    document.getElementById("foodupdate").style.color = "yellow";
    document.getElementById("foodupdate").style.backgroundColor = "black";
    document.getElementById("foodupdate").style.borderColor = "yellow";
    
    };
  
  function showfuelupdateform () {
    event.preventDefault()
    document.getElementById("fuelupdateform").style.display = "block";
    document.getElementById("fuelupdate").style.color = "yellow";
    document.getElementById("fuelupdate").style.backgroundColor = "black";
    document.getElementById("fuelupdate").style.borderColor = "yellow";
    
    };
  
    function showammoupdateform () {
      event.preventDefault()
      document.getElementById("ammoupdateform").style.display = "block";
      document.getElementById("ammoupdate").style.color = "yellow";
      document.getElementById("ammoupdate").style.backgroundColor = "black";
      document.getElementById("ammoupdate").style.borderColor = "yellow";
      
  };
  
  function closedashboard() {
    event.preventDefault()
    document.getElementById("adashboard").style.display = "none";
  };
  
      // Function to make the form draggable
      function makeFormDraggable() {
        var form = document.getElementById("adashboard");
        var isDragging = false;
        var offsetX, offsetY;
  
        // Event listener for mouse down
        form.addEventListener("mousedown", function(e) {
          isDragging = true;
          offsetX = e.clientX - form.getBoundingClientRect().left;
          offsetY = e.clientY - form.getBoundingClientRect().top;
          form.style.cursor = "grabbing";
        });
  
        // Event listener for mouse move
        document.addEventListener("mousemove", function(e) {
          if (isDragging) {
            form.style.left = e.clientX - offsetX + "px";
            form.style.top = e.clientY - offsetY + "px";
          }
        });
  
        // Event listener for mouse up
        document.addEventListener("mouseup", function() {
          isDragging = false;
          form.style.cursor = "grab";
        });
      }
  
      makeFormDraggable();
  
  function closerequestform() {
    event.preventDefault()
    document.getElementById("requestform").style.display = "none";
  };
  
  function makeFormDraggable2() {
    var form = document.getElementById("requestform");
    var isDragging = false;
    var offsetX, offsetY;
  
    // Event listener for mouse down
    form.addEventListener("mousedown", function(e) {
      isDragging = true;
      offsetX = e.clientX - form.getBoundingClientRect().left;
      offsetY = e.clientY - form.getBoundingClientRect().top;
      form.style.cursor = "grabbing";
    });
  
    // Event listener for mouse move
    document.addEventListener("mousemove", function(e) {
      if (isDragging) {
        form.style.left = e.clientX - offsetX + "px";
        form.style.top = e.clientY - offsetY + "px";
      }
    });
  
    // Event listener for mouse up
    document.addEventListener("mouseup", function() {
      isDragging = false;
      form.style.cursor = "grab";
    });
  }
  
  makeFormDraggable2();
  
  
  function closeequipmentupdateform() {
    event.preventDefault()
    document.getElementById("equipmentupdateform").style.display = "none";
  };
  
  function makeFormDraggable3() {
    var form = document.getElementById("equipmentupdateform");
    var isDragging = false;
    var offsetX, offsetY;
  
    // Event listener for mouse down
    form.addEventListener("mousedown", function(e) {
      isDragging = true;
      offsetX = e.clientX - form.getBoundingClientRect().left;
      offsetY = e.clientY - form.getBoundingClientRect().top;
      form.style.cursor = "grabbing";
    });
  
    // Event listener for mouse move
    document.addEventListener("mousemove", function(e) {
      if (isDragging) {
        form.style.left = e.clientX - offsetX + "px";
        form.style.top = e.clientY - offsetY + "px";
      }
    });
  
    // Event listener for mouse up
    document.addEventListener("mouseup", function() {
      isDragging = false;
      form.style.cursor = "grab";
    });
  }
  
  makeFormDraggable3();
  
  function closeereportsdiv() {
    event.preventDefault()
    document.getElementById("inputformslist").style.display = "none";
  };
  
  function updateitem1name () {
      var inputTextValue = document.getElementById('item1name').value;
      document.getElementById('item1nameoutput').innerText = inputTextValue;
      document.getElementById('item1nameoutput').style.color = "yellow";
      document.getElementById('item1nam').innerText = inputTextValue;
      document.getElementById('item1nam').style.color = "yellow";
      item1nam
    };
  
  function updatetamcn1() {
    var inputTextValue = document.getElementById('tamcnid1').value;
    document.getElementById('item1tamcn').innerText = inputTextValue;
    document.getElementById('item1tamcn').style.color = "yellow";
  };
  
  function updateserial1() {
    var inputTextValue = document.getElementById('serial1').value;
    document.getElementById('item1serial').innerText = inputTextValue;
    document.getElementById('item1serial').style.color = "yellow";
  };
  
  function updatenotes1() {
    var inputTextValue = document.getElementById('textequipment1details').value;
    document.getElementById('item1notes').innerText = inputTextValue;
    document.getElementById('item1notes').style.color = "yellow";
  };
  
  function displaySelectedText1() {
    event.preventDefault;
    var selectedOption = document.getElementById('optionSelector1').value;
    var displayTextDiv = document.getElementById('item1statusoutput');
    var displayTextDetails = document.getElementById('item1status');
    switch (selectedOption) {
      case 'option1':
        displayTextDiv.innerText = 'OPERATIONAL';
        displayTextDiv.style.backgroundColor = "lime";
        displayTextDiv.style.color = "black";
        displayTextDiv.style.fontSize = "28px";
        displayTextDetails.innerText = 'OPERATIONAL';
        displayTextDetails.style.color = "lime";
        break;
      case 'option2':
        displayTextDiv.innerText = 'DEGRADED';
        displayTextDiv.style.backgroundColor = "yellow";
        displayTextDiv.style.color = "black";
        displayTextDetails.innerText = 'DEGRADED';
        displayTextDetails.style.color = "yellow";
        break;
      case 'option3':
        displayTextDiv.innerText = 'DEADLINED';
        displayTextDiv.style.backgroundColor = "red";
        displayTextDiv.style.color = "white";
        displayTextDetails.innerText = 'DEADLINED';
        displayTextDetails.style.color = "red";
        break;
      default:
        displayTextDiv.innerText = '';
        break;
    }};
  
    function displayitem1details() {
      event.preventDefault;
      document.getElementById("item1details").style.display = "block";
    };
  
    function closeitem1detailsform() {
      event.preventDefault()
      document.getElementById("item1details").style.display = "none";
    };
  
    function updateitem2name () {
      var inputTextValue = document.getElementById('item2name').value;
      document.getElementById('item2nameoutput').innerText = inputTextValue;
      document.getElementById('item2nameoutput').style.color = "yellow";
      document.getElementById('item2nam').innerText = inputTextValue;
      document.getElementById('item2nam').style.color = "yellow";
      item2nam
    };
  
  function updatetamcn2() {
    var inputTextValue = document.getElementById('tamcnid2').value;
    document.getElementById('item2tamcn').innerText = inputTextValue;
    document.getElementById('item2tamcn').style.color = "yellow";
  };
  
  function updateserial2() {
    var inputTextValue = document.getElementById('serial2').value;
    document.getElementById('item2serial').innerText = inputTextValue;
    document.getElementById('item2serial').style.color = "yellow";
  };
  
  function updatenotes2() {
    var inputTextValue = document.getElementById('textequipment2details').value;
    document.getElementById('item2notes').innerText = inputTextValue;
    document.getElementById('item2notes').style.color = "yellow";
  };
  
  function displaySelectedText2() {
    event.preventDefault;
    var selectedOption = document.getElementById('optionSelector2').value;
    var displayTextDiv = document.getElementById('item2statusoutput');
    var displayTextDetails = document.getElementById('item2status');
    switch (selectedOption) {
      case 'option1':
        displayTextDiv.innerText = 'OPERATIONAL';
        displayTextDiv.style.backgroundColor = "lime";
        displayTextDiv.style.color = "black";
        displayTextDiv.style.fontSize = "28px";
        displayTextDetails.innerText = 'OPERATIONAL';
        displayTextDetails.style.color = "lime";
        break;
      case 'option2':
        displayTextDiv.innerText = 'DEGRADED';
        displayTextDiv.style.backgroundColor = "yellow";
        displayTextDiv.style.color = "black";
        displayTextDetails.innerText = 'DEGRADED';
        displayTextDetails.style.color = "yellow";
        break;
      case 'option3':
        displayTextDiv.innerText = 'DEADLINED';
        displayTextDiv.style.backgroundColor = "red";
        displayTextDiv.style.color = "white";
        displayTextDetails.innerText = 'DEADLINED';
        displayTextDetails.style.color = "red";
        break;
      default:
        displayTextDiv.innerText = '';
        break;
    }};
  
    function displayitem2details() {
      event.preventDefault;
      document.getElementById("item2details").style.display = "block";
    };
  
    function closeitem2detailsform() {
      event.preventDefault()
      document.getElementById("item2details").style.display = "none";
    };
  
    function updateitem3name () {
      var inputTextValue = document.getElementById('item3name').value;
      document.getElementById('item3nameoutput').innerText = inputTextValue;
      document.getElementById('item3nameoutput').style.color = "yellow";
      document.getElementById('item3nam').innerText = inputTextValue;
      document.getElementById('item3nam').style.color = "yellow";
      item3nam
    };
  
  function updatetamcn3() {
    var inputTextValue = document.getElementById('tamcnid3').value;
    document.getElementById('item3tamcn').innerText = inputTextValue;
    document.getElementById('item3tamcn').style.color = "yellow";
  };
  
  function updateserial3() {
    var inputTextValue = document.getElementById('serial3').value;
    document.getElementById('item3serial').innerText = inputTextValue;
    document.getElementById('item3serial').style.color = "yellow";
  };
  
  function updatenotes3() {
    var inputTextValue = document.getElementById('textequipment3details').value;
    document.getElementById('item3notes').innerText = inputTextValue;
    document.getElementById('item3notes').style.color = "yellow";
  };
  
  function displaySelectedText3() {
    event.preventDefault;
    var selectedOption = document.getElementById('optionSelector3').value;
    var displayTextDiv = document.getElementById('item3statusoutput');
    var displayTextDetails = document.getElementById('item3status');
    switch (selectedOption) {
      case 'option1':
        displayTextDiv.innerText = 'OPERATIONAL';
        displayTextDiv.style.backgroundColor = "lime";
        displayTextDiv.style.color = "black";
        displayTextDiv.style.fontSize = "28px";
        displayTextDetails.innerText = 'OPERATIONAL';
        displayTextDetails.style.color = "lime";
        break;
      case 'option2':
        displayTextDiv.innerText = 'DEGRADED';
        displayTextDiv.style.backgroundColor = "yellow";
        displayTextDiv.style.color = "black";
        displayTextDetails.innerText = 'DEGRADED';
        displayTextDetails.style.color = "yellow";
        break;
      case 'option3':
        displayTextDiv.innerText = 'DEADLINED';
        displayTextDiv.style.backgroundColor = "red";
        displayTextDiv.style.color = "white";
        displayTextDetails.innerText = 'DEADLINED';
        displayTextDetails.style.color = "red";
        break;
      default:
        displayTextDiv.innerText = '';
        break;
    }};
  
    function displayitem3details() {
      event.preventDefault;
      document.getElementById("item3details").style.display = "block";
    };
  
    function closeitem3detailsform() {
      event.preventDefault()
      document.getElementById("item3details").style.display = "none";
    };
  
    function updateitem4name () {
      var inputTextValue = document.getElementById('item4name').value;
      document.getElementById('item4nameoutput').innerText = inputTextValue;
      document.getElementById('item4nameoutput').style.color = "yellow";
      document.getElementById('item4nam').innerText = inputTextValue;
      document.getElementById('item4nam').style.color = "yellow";
      item4nam
    };
  
  function updatetamcn4() {
    var inputTextValue = document.getElementById('tamcnid4').value;
    document.getElementById('item4tamcn').innerText = inputTextValue;
    document.getElementById('item4tamcn').style.color = "yellow";
  };
  
  function updateserial4() {
    var inputTextValue = document.getElementById('serial4').value;
    document.getElementById('item4serial').innerText = inputTextValue;
    document.getElementById('item4serial').style.color = "yellow";
  };
  
  function updatenotes4() {
    var inputTextValue = document.getElementById('textequipment4details').value;
    document.getElementById('item4notes').innerText = inputTextValue;
    document.getElementById('item4notes').style.color = "yellow";
  };
  
  function displaySelectedText4() {
    event.preventDefault;
    var selectedOption = document.getElementById('optionSelector4').value;
    var displayTextDiv = document.getElementById('item4statusoutput');
    var displayTextDetails = document.getElementById('item4status');
    switch (selectedOption) {
      case 'option1':
        displayTextDiv.innerText = 'OPERATIONAL';
        displayTextDiv.style.backgroundColor = "lime";
        displayTextDiv.style.color = "black";
        displayTextDiv.style.fontSize = "28px";
        displayTextDetails.innerText = 'OPERATIONAL';
        displayTextDetails.style.color = "lime";
        break;
      case 'option2':
        displayTextDiv.innerText = 'DEGRADED';
        displayTextDiv.style.backgroundColor = "yellow";
        displayTextDiv.style.color = "black";
        displayTextDetails.innerText = 'DEGRADED';
        displayTextDetails.style.color = "yellow";
        break;
      case 'option3':
        displayTextDiv.innerText = 'DEADLINED';
        displayTextDiv.style.backgroundColor = "red";
        displayTextDiv.style.color = "white";
        displayTextDetails.innerText = 'DEADLINED';
        displayTextDetails.style.color = "red";
        break;
      default:
        displayTextDiv.innerText = '';
        break;
    }};
  
    function displayitem4details() {
      event.preventDefault;
      document.getElementById("item4details").style.display = "block";
    };
  
    function closeitem4detailsform() {
      event.preventDefault()
      document.getElementById("item4details").style.display = "none";
    };
  
    function updateitem5name () {
      var inputTextValue = document.getElementById('item5name').value;
      document.getElementById('item5nameoutput').innerText = inputTextValue;
      document.getElementById('item5nameoutput').style.color = "yellow";
      document.getElementById('item5nam').innerText = inputTextValue;
      document.getElementById('item5nam').style.color = "yellow";
      item5nam
    };
  
  function updatetamcn5() {
    var inputTextValue = document.getElementById('tamcnid5').value;
    document.getElementById('item5tamcn').innerText = inputTextValue;
    document.getElementById('item5tamcn').style.color = "yellow";
  };
  
  function updateserial5() {
    var inputTextValue = document.getElementById('serial5').value;
    document.getElementById('item5serial').innerText = inputTextValue;
    document.getElementById('item5serial').style.color = "yellow";
  };
  
  function updatenotes5() {
    var inputTextValue = document.getElementById('textequipment5details').value;
    document.getElementById('item5notes').innerText = inputTextValue;
    document.getElementById('item5notes').style.color = "yellow";
  };
  
  function displaySelectedText5() {
    event.preventDefault;
    var selectedOption = document.getElementById('optionSelector5').value;
    var displayTextDiv = document.getElementById('item5statusoutput');
    var displayTextDetails = document.getElementById('item5status');
    switch (selectedOption) {
      case 'option1':
        displayTextDiv.innerText = 'OPERATIONAL';
        displayTextDiv.style.backgroundColor = "lime";
        displayTextDiv.style.color = "black";
        displayTextDiv.style.fontSize = "28px";
        displayTextDetails.innerText = 'OPERATIONAL';
        displayTextDetails.style.color = "lime";
        break;
      case 'option2':
        displayTextDiv.innerText = 'DEGRADED';
        displayTextDiv.style.backgroundColor = "yellow";
        displayTextDiv.style.color = "black";
        displayTextDetails.innerText = 'DEGRADED';
        displayTextDetails.style.color = "yellow";
        break;
      case 'option3':
        displayTextDiv.innerText = 'DEADLINED';
        displayTextDiv.style.backgroundColor = "red";
        displayTextDiv.style.color = "white";
        displayTextDetails.innerText = 'DEADLINED';
        displayTextDetails.style.color = "red";
        break;
      default:
        displayTextDiv.innerText = '';
        break;
    }};
  
    function displayitem5details() {
      event.preventDefault;
      document.getElementById("item5details").style.display = "block";
    };
  
    function closeitem5detailsform() {
      event.preventDefault()
      document.getElementById("item5details").style.display = "none";
    };
  
    function updateitem6name () {
      var inputTextValue = document.getElementById('item6name').value;
      document.getElementById('item6nameoutput').innerText = inputTextValue;
      document.getElementById('item6nameoutput').style.color = "yellow";
      document.getElementById('item6nam').innerText = inputTextValue;
      document.getElementById('item6nam').style.color = "yellow";
      item6nam
    };
  
  function updatetamcn6() {
    var inputTextValue = document.getElementById('tamcnid6').value;
    document.getElementById('item6tamcn').innerText = inputTextValue;
    document.getElementById('item6tamcn').style.color = "yellow";
  };
  
  function updateserial6() {
    var inputTextValue = document.getElementById('serial6').value;
    document.getElementById('item6serial').innerText = inputTextValue;
    document.getElementById('item6serial').style.color = "yellow";
  };
  
  function updatenotes6() {
    var inputTextValue = document.getElementById('textequipment6details').value;
    document.getElementById('item6notes').innerText = inputTextValue;
    document.getElementById('item6notes').style.color = "yellow";
  };
  
  function displaySelectedText6() {
    event.preventDefault;
    var selectedOption = document.getElementById('optionSelector6').value;
    var displayTextDiv = document.getElementById('item6statusoutput');
    var displayTextDetails = document.getElementById('item6status');
    switch (selectedOption) {
      case 'option1':
        displayTextDiv.innerText = 'OPERATIONAL';
        displayTextDiv.style.backgroundColor = "lime";
        displayTextDiv.style.color = "black";
        displayTextDiv.style.fontSize = "28px";
        displayTextDetails.innerText = 'OPERATIONAL';
        displayTextDetails.style.color = "lime";
        break;
      case 'option2':
        displayTextDiv.innerText = 'DEGRADED';
        displayTextDiv.style.backgroundColor = "yellow";
        displayTextDiv.style.color = "black";
        displayTextDetails.innerText = 'DEGRADED';
        displayTextDetails.style.color = "yellow";
        break;
      case 'option3':
        displayTextDiv.innerText = 'DEADLINED';
        displayTextDiv.style.backgroundColor = "red";
        displayTextDiv.style.color = "white";
        displayTextDetails.innerText = 'DEADLINED';
        displayTextDetails.style.color = "red";
        break;
      default:
        displayTextDiv.innerText = '';
        break;
    }};
  
    function displayitem6details() {
      event.preventDefault;
      document.getElementById("item6details").style.display = "block";
    };
  
    function closeitem6detailsform() {
      event.preventDefault()
      document.getElementById("item6details").style.display = "none";
    };
  
    function closepersonnelupdateform() {
      event.preventDefault()
      document.getElementById("personnelupdateform").style.display = "none";
    };
    
    function makeFormDraggable5() {
      var form = document.getElementById("personnelupdateform");
      var isDragging = false;
      var offsetX, offsetY;
    
      // Event listener for mouse down
      form.addEventListener("mousedown", function(e) {
        isDragging = true;
        offsetX = e.clientX - form.getBoundingClientRect().left;
        offsetY = e.clientY - form.getBoundingClientRect().top;
        form.style.cursor = "grabbing";
      });
    
      // Event listener for mouse move
      document.addEventListener("mousemove", function(e) {
        if (isDragging) {
          form.style.left = e.clientX - offsetX + "px";
          form.style.top = e.clientY - offsetY + "px";
        }
      });
    
      // Event listener for mouse up
      document.addEventListener("mouseup", function() {
        isDragging = false;
        form.style.cursor = "grab";
      });
    }
    
    makeFormDraggable5();
    
    function updateperson1billet () {
        var inputTextValue = document.getElementById('billet1').value;
        document.getElementById('person1billetoutput').innerText = inputTextValue;
        document.getElementById('person1billetoutput').style.color = "yellow";
        document.getElementById('person1billet').innerText = inputTextValue;
        document.getElementById('person1billet').style.color = "yellow";
        item1nam
      };
    
    function updateperson1zap() {
      var inputTextValue = document.getElementById('zap1').value;
      document.getElementById('person1num').innerText = inputTextValue;
      document.getElementById('person1num').style.color = "yellow";
    };
    
    function updateperson1rank() {
      var inputTextValue = document.getElementById('rank1').value;
      document.getElementById('person1rank').innerText = inputTextValue;
      document.getElementById('person1rank').style.color = "yellow";
    };
  
    function updateperson1lname() {
      var inputTextValue = document.getElementById('lname1').value;
      document.getElementById('person1lname').innerText = inputTextValue;
      document.getElementById('person1lname').style.color = "yellow";
    };
  
    function updateperson1fname() {
      var inputTextValue = document.getElementById('fname1').value;
      document.getElementById('person1fname').innerText = inputTextValue;
      document.getElementById('person1fname').style.color = "yellow";
    };
    
    function updateperson1notes() {
      var inputTextValue = document.getElementById('textpersonnel1details').value;
      document.getElementById('person1notes').innerText = inputTextValue;
      document.getElementById('person1notes').style.color = "yellow";
    };
    
    function displaySelectedStatus1() {
      event.preventDefault;
      var selectedOption = document.getElementById('personSelector1').value;
      var displayTextDiv = document.getElementById('person1statusoutput');
      var displayTextDetails = document.getElementById('person1status');
      switch (selectedOption) {
        case 'option1':
          displayTextDiv.innerText = 'FULL DUTY';
          displayTextDiv.style.backgroundColor = "lime";
          displayTextDiv.style.color = "black";
          displayTextDiv.style.fontSize = "28px";
          displayTextDetails.innerText = 'FULL DUTY';
          displayTextDetails.style.color = "lime";
          break;
        case 'option2':
          displayTextDiv.innerText = 'LIGHT DUTY';
          displayTextDiv.style.backgroundColor = "yellow";
          displayTextDiv.style.color = "black";
          displayTextDetails.innerText = 'LIGHT DUTY';
          displayTextDetails.style.color = "yellow";
          break;
        case 'option3':
          displayTextDiv.innerText = 'LIMDU';
          displayTextDiv.style.backgroundColor = "red";
          displayTextDiv.style.color = "white";
          displayTextDetails.innerText = 'LIMITED DUTY';
          displayTextDetails.style.color = "red";
          break;
        default:
          displayTextDiv.innerText = '';
          break;
      }};
    
      function displayperson1details() {
        event.preventDefault;
        document.getElementById("person1details").style.display = "block";
      };
    
      function closeperson1detailsform() {
        event.preventDefault()
        document.getElementById("person1details").style.display = "none";
      };
  
      function updateperson2billet () {
        var inputTextValue = document.getElementById('billet2').value;
        document.getElementById('person2billetoutput').innerText = inputTextValue;
        document.getElementById('person2billetoutput').style.color = "yellow";
        document.getElementById('person2billet').innerText = inputTextValue;
        document.getElementById('person2billet').style.color = "yellow";
        item1nam
      };
    
    function updateperson2zap() {
      var inputTextValue = document.getElementById('zap2').value;
      document.getElementById('person2num').innerText = inputTextValue;
      document.getElementById('person2num').style.color = "yellow";
    };
    
    function updateperson2rank() {
      var inputTextValue = document.getElementById('rank2').value;
      document.getElementById('person2rank').innerText = inputTextValue;
      document.getElementById('person2rank').style.color = "yellow";
    };
  
    function updateperson2lname() {
      var inputTextValue = document.getElementById('lname2').value;
      document.getElementById('person2lname').innerText = inputTextValue;
      document.getElementById('person2lname').style.color = "yellow";
    };
  
    function updateperson2fname() {
      var inputTextValue = document.getElementById('fname2').value;
      document.getElementById('person2fname').innerText = inputTextValue;
      document.getElementById('person2fname').style.color = "yellow";
    };
    
    function updateperson2notes() {
      var inputTextValue = document.getElementById('textpersonnel2details').value;
      document.getElementById('person2notes').innerText = inputTextValue;
      document.getElementById('person2notes').style.color = "yellow";
    };
    
    function displaySelectedStatus2() {
      event.preventDefault;
      var selectedOption = document.getElementById('personSelector2').value;
      var displayTextDiv = document.getElementById('person2statusoutput');
      var displayTextDetails = document.getElementById('person2status');
      switch (selectedOption) {
        case 'option1':
          displayTextDiv.innerText = 'FULL DUTY';
          displayTextDiv.style.backgroundColor = "lime";
          displayTextDiv.style.color = "black";
          displayTextDiv.style.fontSize = "28px";
          displayTextDetails.innerText = 'FULL DUTY';
          displayTextDetails.style.color = "lime";
          break;
        case 'option2':
          displayTextDiv.innerText = 'LIGHT DUTY';
          displayTextDiv.style.backgroundColor = "yellow";
          displayTextDiv.style.color = "black";
          displayTextDetails.innerText = 'LIGHT DUTY';
          displayTextDetails.style.color = "yellow";
          break;
        case 'option3':
          displayTextDiv.innerText = 'LIMDU';
          displayTextDiv.style.backgroundColor = "red";
          displayTextDiv.style.color = "white";
          displayTextDetails.innerText = 'LIMITED DUTY';
          displayTextDetails.style.color = "red";
          break;
        default:
          displayTextDiv.innerText = '';
          break;
      }};
    
      function displayperson2details() {
        event.preventDefault;
        document.getElementById("person2details").style.display = "block";
      };
    
      function closeperson2detailsform() {
        event.preventDefault()
        document.getElementById("person2details").style.display = "none";
      };
  
      function updateperson3billet () {
        var inputTextValue = document.getElementById('billet3').value;
        document.getElementById('person3billetoutput').innerText = inputTextValue;
        document.getElementById('person3billetoutput').style.color = "yellow";
        document.getElementById('person3billet').innerText = inputTextValue;
        document.getElementById('person3billet').style.color = "yellow";
        item1nam
      };
    
    function updateperson3zap() {
      var inputTextValue = document.getElementById('zap3').value;
      document.getElementById('person3num').innerText = inputTextValue;
      document.getElementById('person3num').style.color = "yellow";
    };
    
    function updateperson3rank() {
      var inputTextValue = document.getElementById('rank3').value;
      document.getElementById('person3rank').innerText = inputTextValue;
      document.getElementById('person3rank').style.color = "yellow";
    };
  
    function updateperson3lname() {
      var inputTextValue = document.getElementById('lname3').value;
      document.getElementById('person3lname').innerText = inputTextValue;
      document.getElementById('person3lname').style.color = "yellow";
    };
  
    function updateperson3fname() {
      var inputTextValue = document.getElementById('fname3').value;
      document.getElementById('person3fname').innerText = inputTextValue;
      document.getElementById('person3fname').style.color = "yellow";
    };
    
    function updateperson3notes() {
      var inputTextValue = document.getElementById('textpersonnel3details').value;
      document.getElementById('person3notes').innerText = inputTextValue;
      document.getElementById('person3notes').style.color = "yellow";
    };
    
    function displaySelectedStatus3() {
      event.preventDefault;
      var selectedOption = document.getElementById('personSelector3').value;
      var displayTextDiv = document.getElementById('person3statusoutput');
      var displayTextDetails = document.getElementById('person3status');
      switch (selectedOption) {
        case 'option1':
          displayTextDiv.innerText = 'FULL DUTY';
          displayTextDiv.style.backgroundColor = "lime";
          displayTextDiv.style.color = "black";
          displayTextDiv.style.fontSize = "28px";
          displayTextDetails.innerText = 'FULL DUTY';
          displayTextDetails.style.color = "lime";
          break;
        case 'option2':
          displayTextDiv.innerText = 'LIGHT DUTY';
          displayTextDiv.style.backgroundColor = "yellow";
          displayTextDiv.style.color = "black";
          displayTextDetails.innerText = 'LIGHT DUTY';
          displayTextDetails.style.color = "yellow";
          break;
        case 'option3':
          displayTextDiv.innerText = 'LIMDU';
          displayTextDiv.style.backgroundColor = "red";
          displayTextDiv.style.color = "white";
          displayTextDetails.innerText = 'LIMITED DUTY';
          displayTextDetails.style.color = "red";
          break;
        default:
          displayTextDiv.innerText = '';
          break;
      }};
    
      function displayperson3details() {
        event.preventDefault;
        document.getElementById("person3details").style.display = "block";
      };
    
      function closeperson3detailsform() {
        event.preventDefault()
        document.getElementById("person3details").style.display = "none";
      };
    
      function updateperson4billet () {
        var inputTextValue = document.getElementById('billet4').value;
        document.getElementById('person4billetoutput').innerText = inputTextValue;
        document.getElementById('person4billetoutput').style.color = "yellow";
        document.getElementById('person4billet').innerText = inputTextValue;
        document.getElementById('person4billet').style.color = "yellow";
        item1nam
      };
    
    function updateperson4zap() {
      var inputTextValue = document.getElementById('zap4').value;
      document.getElementById('person4num').innerText = inputTextValue;
      document.getElementById('person4num').style.color = "yellow";
    };
    
    function updateperson4rank() {
      var inputTextValue = document.getElementById('rank4').value;
      document.getElementById('person4rank').innerText = inputTextValue;
      document.getElementById('person4rank').style.color = "yellow";
    };
  
    function updateperson4lname() {
      var inputTextValue = document.getElementById('lname4').value;
      document.getElementById('person4lname').innerText = inputTextValue;
      document.getElementById('person4lname').style.color = "yellow";
    };
  
    function updateperson4fname() {
      var inputTextValue = document.getElementById('fname4').value;
      document.getElementById('person4fname').innerText = inputTextValue;
      document.getElementById('person4fname').style.color = "yellow";
    };
    
    function updateperson4notes() {
      var inputTextValue = document.getElementById('textpersonnel4details').value;
      document.getElementById('person4notes').innerText = inputTextValue;
      document.getElementById('person4notes').style.color = "yellow";
    };
    
    function displaySelectedStatus4() {
      event.preventDefault;
      var selectedOption = document.getElementById('personSelector4').value;
      var displayTextDiv = document.getElementById('person4statusoutput');
      var displayTextDetails = document.getElementById('person4status');
      switch (selectedOption) {
        case 'option1':
          displayTextDiv.innerText = 'FULL DUTY';
          displayTextDiv.style.backgroundColor = "lime";
          displayTextDiv.style.color = "black";
          displayTextDiv.style.fontSize = "28px";
          displayTextDetails.innerText = 'FULL DUTY';
          displayTextDetails.style.color = "lime";
          break;
        case 'option2':
          displayTextDiv.innerText = 'LIGHT DUTY';
          displayTextDiv.style.backgroundColor = "yellow";
          displayTextDiv.style.color = "black";
          displayTextDetails.innerText = 'LIGHT DUTY';
          displayTextDetails.style.color = "yellow";
          break;
        case 'option3':
          displayTextDiv.innerText = 'LIMDU';
          displayTextDiv.style.backgroundColor = "red";
          displayTextDiv.style.color = "white";
          displayTextDetails.innerText = 'LIMITED DUTY';
          displayTextDetails.style.color = "red";
          break;
        default:
          displayTextDiv.innerText = '';
          break;
      }};
    
      function displayperson4details() {
        event.preventDefault;
        document.getElementById("person4details").style.display = "block";
      };
    
      function closeperson4detailsform() {
        event.preventDefault()
        document.getElementById("person4details").style.display = "none";
      };
    
      function updateperson5billet () {
        var inputTextValue = document.getElementById('billet5').value;
        document.getElementById('person5billetoutput').innerText = inputTextValue;
        document.getElementById('person5billetoutput').style.color = "yellow";
        document.getElementById('person5billet').innerText = inputTextValue;
        document.getElementById('person5billet').style.color = "yellow";
        item1nam
      };
    
    function updateperson5zap() {
      var inputTextValue = document.getElementById('zap5').value;
      document.getElementById('person5num').innerText = inputTextValue;
      document.getElementById('person5num').style.color = "yellow";
    };
    
    function updateperson5rank() {
      var inputTextValue = document.getElementById('rank5').value;
      document.getElementById('person5rank').innerText = inputTextValue;
      document.getElementById('person5rank').style.color = "yellow";
    };
  
    function updateperson5lname() {
      var inputTextValue = document.getElementById('lname5').value;
      document.getElementById('person5lname').innerText = inputTextValue;
      document.getElementById('person5lname').style.color = "yellow";
    };
  
    function updateperson5fname() {
      var inputTextValue = document.getElementById('fname5').value;
      document.getElementById('person5fname').innerText = inputTextValue;
      document.getElementById('person5fname').style.color = "yellow";
    };
    
    function updateperson5notes() {
      var inputTextValue = document.getElementById('textpersonnel5details').value;
      document.getElementById('person5notes').innerText = inputTextValue;
      document.getElementById('person5notes').style.color = "yellow";
    };
    
    function displaySelectedStatus5() {
      event.preventDefault;
      var selectedOption = document.getElementById('personSelector5').value;
      var displayTextDiv = document.getElementById('person5statusoutput');
      var displayTextDetails = document.getElementById('person5status');
      switch (selectedOption) {
        case 'option1':
          displayTextDiv.innerText = 'FULL DUTY';
          displayTextDiv.style.backgroundColor = "lime";
          displayTextDiv.style.color = "black";
          displayTextDiv.style.fontSize = "28px";
          displayTextDetails.innerText = 'FULL DUTY';
          displayTextDetails.style.color = "lime";
          break;
        case 'option2':
          displayTextDiv.innerText = 'LIGHT DUTY';
          displayTextDiv.style.backgroundColor = "yellow";
          displayTextDiv.style.color = "black";
          displayTextDetails.innerText = 'LIGHT DUTY';
          displayTextDetails.style.color = "yellow";
          break;
        case 'option3':
          displayTextDiv.innerText = 'LIMDU';
          displayTextDiv.style.backgroundColor = "red";
          displayTextDiv.style.color = "white";
          displayTextDetails.innerText = 'LIMITED DUTY';
          displayTextDetails.style.color = "red";
          break;
        default:
          displayTextDiv.innerText = '';
          break;
      }};
    
      function displayperson5details() {
        event.preventDefault;
        document.getElementById("person5details").style.display = "block";
      };
    
      function closeperson5detailsform() {
        event.preventDefault()
        document.getElementById("person5details").style.display = "none";
      };
  
      function updateperson6billet () {
        var inputTextValue = document.getElementById('billet6').value;
        document.getElementById('person6billetoutput').innerText = inputTextValue;
        document.getElementById('person6billetoutput').style.color = "yellow";
        document.getElementById('person6billet').innerText = inputTextValue;
        document.getElementById('person6billet').style.color = "yellow";
        item1nam
      };
    
    function updateperson6zap() {
      var inputTextValue = document.getElementById('zap6').value;
      document.getElementById('person6num').innerText = inputTextValue;
      document.getElementById('person6num').style.color = "yellow";
    };
    
    function updateperson6rank() {
      var inputTextValue = document.getElementById('rank6').value;
      document.getElementById('person6rank').innerText = inputTextValue;
      document.getElementById('person6rank').style.color = "yellow";
    };
  
    function updateperson6lname() {
      var inputTextValue = document.getElementById('lname6').value;
      document.getElementById('person6lname').innerText = inputTextValue;
      document.getElementById('person6lname').style.color = "yellow";
    };
  
    function updateperson6fname() {
      var inputTextValue = document.getElementById('fname6').value;
      document.getElementById('person6fname').innerText = inputTextValue;
      document.getElementById('person6fname').style.color = "yellow";
    };
    
    function updateperson6notes() {
      var inputTextValue = document.getElementById('textpersonnel6details').value;
      document.getElementById('person6notes').innerText = inputTextValue;
      document.getElementById('person6notes').style.color = "yellow";
    };
    
    function displaySelectedStatus6() {
      event.preventDefault;
      var selectedOption = document.getElementById('personSelector6').value;
      var displayTextDiv = document.getElementById('person6statusoutput');
      var displayTextDetails = document.getElementById('person6status');
      switch (selectedOption) {
        case 'option1':
          displayTextDiv.innerText = 'FULL DUTY';
          displayTextDiv.style.backgroundColor = "lime";
          displayTextDiv.style.color = "black";
          displayTextDiv.style.fontSize = "28px";
          displayTextDetails.innerText = 'FULL DUTY';
          displayTextDetails.style.color = "lime";
          break;
        case 'option2':
          displayTextDiv.innerText = 'LIGHT DUTY';
          displayTextDiv.style.backgroundColor = "yellow";
          displayTextDiv.style.color = "black";
          displayTextDetails.innerText = 'LIGHT DUTY';
          displayTextDetails.style.color = "yellow";
          break;
        case 'option3':
          displayTextDiv.innerText = 'LIMDU';
          displayTextDiv.style.backgroundColor = "red";
          displayTextDiv.style.color = "white";
          displayTextDetails.innerText = 'LIMITED DUTY';
          displayTextDetails.style.color = "red";
          break;
        default:
          displayTextDiv.innerText = '';
          break;
      }};
    
      function displayperson6details() {
        event.preventDefault;
        document.getElementById("person6details").style.display = "block";
      };
    
      function closeperson6detailsform() {
        event.preventDefault()
        document.getElementById("person6details").style.display = "none";
      };
  
  
  function makeunitaDraggable() {
    var form = document.getElementById("unitacontainer");
    var isDragging = false;
    var offsetX, offsetY;
  
    // Event listener for mouse down
    form.addEventListener("mousedown", function(e) {
      isDragging = true;
      offsetX = e.clientX - form.getBoundingClientRect().left;
      offsetY = e.clientY - form.getBoundingClientRect().top;
      form.style.cursor = "grabbing";
    });
  
    // Event listener for mouse move
    document.addEventListener("mousemove", function(e) {
      if (isDragging) {
        form.style.left = e.clientX - offsetX + "px";
        form.style.top = e.clientY - offsetY + "px";
      }
    });
  
    // Event listener for mouse up
    document.addEventListener("mouseup", function() {
      isDragging = false;
      form.style.cursor = "grab";
    });
  }
  
  makeunitaDraggable();
  
  
  function closeequipmentdetailsform1() {
    event.preventDefault();
    document.getElementById("equipment1details").style.display = "none"; 
  }
  
  function openequipmentdetailsform1() {
    var frontDiv = document.getElementById("equipment1details");
    var behindDiv = document.getElementById("item2");
  
    event.preventDefault();
    document.getElementById("equipment1details").style.display = "block"; 
  };
  
  
  
  function updateequipment1Time() {
    const now = new Date();
    const timeElement = document.getElementById('equipmentupdatetime1');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('item1updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closeequipmentdetailsform2() {
    event.preventDefault()
    document.getElementById("equipment2details").style.display = "none"; 
  }
  
  function openequipmentdetailsform2() {
    document.getElementById("equipment2details").style.display = "block"; 
  }
  
  function updateequipment2Time() {
    const now = new Date();
    const timeElement = document.getElementById('equipmentupdatetime2');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('item2updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closeequipmentdetailsform3() {
    event.preventDefault()
    document.getElementById("equipment3details").style.display = "none"; 
  }
  
  function openequipmentdetailsform3() {
    document.getElementById("equipment3details").style.display = "block"; 
  }
  
  function updateequipment3Time() {
    const now = new Date();
    const timeElement = document.getElementById('equipmentupdatetime3');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('item3updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closeequipmentdetailsform4() {
    event.preventDefault()
    document.getElementById("equipment4details").style.display = "none"; 
  }
  
  function openequipmentdetailsform4() {
    document.getElementById("equipment4details").style.display = "block"; 
  }
  
  function updateequipment4Time() {
    const now = new Date();
    const timeElement = document.getElementById('equipmentupdatetime4');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('item4updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closeequipmentdetailsform5() {
    event.preventDefault()
    document.getElementById("equipment5details").style.display = "none"; 
  }
  
  function openequipmentdetailsform5() {
    document.getElementById("equipment5details").style.display = "block"; 
  }
  
  function updateequipment5Time() {
    const now = new Date();
    const timeElement = document.getElementById('equipmentupdatetime5');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('item5updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closeequipmentdetailsform6() {
    event.preventDefault()
    document.getElementById("equipment6details").style.display = "none"; 
  }
  
  function openequipmentdetailsform6() {
    document.getElementById("equipment6details").style.display = "block"; 
  }
  
  function updateequipment6Time() {
    const now = new Date();
    const timeElement = document.getElementById('equipmentupdatetime6');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('item6updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closepersonneldetailsform1() {
    event.preventDefault();
    document.getElementById("personnel1details").style.display = "none"; 
  }
  
  function openpersonneldetailsform1() {
    var frontDiv = document.getElementById("personnel1details");
    var behindDiv = document.getElementById("item2");
  
    event.preventDefault();
    document.getElementById("personnel1details").style.display = "block"; 
  };
  
  function updatepersonnel1Time() {
    const now = new Date();
    const timeElement = document.getElementById('personnelupdatetime1');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('person1updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  function updatepersonnel2Time() {
    const now = new Date();
    const timeElement = document.getElementById('personnelupdatetime2');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('person2updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  function updatepersonnel3Time() {
    const now = new Date();
    const timeElement = document.getElementById('personnelupdatetime3');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('person3updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  function updatepersonnel4Time() {
    const now = new Date();
    const timeElement = document.getElementById('personnelupdatetime4');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('person4updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  function updatepersonnel5Time() {
    const now = new Date();
    const timeElement = document.getElementById('personnelupdatetime5');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('person5updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  function updatepersonnel6Time() {
    const now = new Date();
    const timeElement = document.getElementById('personnelupdatetime6');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    timeElement.style.paddingTop = "10px";
    const timeElement1 = document.getElementById('person6updated');
    timeElement1.textContent = now.toLocaleTimeString();
    timeElement1.style.color = "yellow";
    timeElement1.style.fontWeight = "bold";
    timeElement1.style.fontSize = "x-large";
    timeElement1.style.left = "20px";
  }
  
  function closesupplyupdateform() {
    event.preventDefault()
    document.getElementById("supplyupdateform").style.display = "none";
  };
  
  function opensupplyupdate() {
    event.preventDefault()
    document.getElementById("supplyupdateform").style.display = "block";
  };
  
  function openequipmentupdate() {
    event.preventDefault()
    document.getElementById("equipmentupdateform").style.display = "block";
  };
  
  function openpersonnelupdate() {
    event.preventDefault()
    document.getElementById("personnelupdateform").style.display = "block";
  };
  
  function makeFormDraggable4() {
    var form = document.getElementById("supplyupdateform");
    var isDragging = false;
    var offsetX, offsetY;
  
    // Event listener for mouse down
    form.addEventListener("mousedown", function(e) {
      isDragging = true;
      offsetX = e.clientX - form.getBoundingClientRect().left;
      offsetY = e.clientY - form.getBoundingClientRect().top;
      form.style.cursor = "grabbing";
    });
  
    // Event listener for mouse move
    document.addEventListener("mousemove", function(e) {
      if (isDragging) {
        form.style.left = e.clientX - offsetX + "px";
        form.style.top = e.clientY - offsetY + "px";
      }
    });
  
    // Event listener for mouse up
    document.addEventListener("mouseup", function() {
      isDragging = false;
      form.style.cursor = "grab";
    });
  }
  
  makeFormDraggable4();
  
  
  
  document.getElementById("class1updatebutton").addEventListener("click", function() {
      event.preventDefault()
      const value1 = parseFloat(document.getElementById("class1wateronhand").value);
      const value2 = parseFloat(document.getElementById("class1watercapacity").value);
      const value3 = parseFloat(document.getElementById("class1foodonhand").value);
      const value4 = parseFloat(document.getElementById("class1foodcapacity").value);
  
      if (value2 === 0) {
          document.getElementById("class1output").textContent = "Capacity cannot be zero";
      } 
      else {
  
          const percentage = (((value1 / value2) + (value3 / value4)) / 2) * 100;
          document.getElementById("class1output").textContent = `${percentage}%`;
          document.getElementById("class1output").style.fontWeight = "bold";
          document.getElementById("class1output").style.color = "yellow";
          const percentage2 = (((value1 / value2) + (value3 / value4)) / 2) * 100;
          document.getElementById("class1output2").textContent = `${percentage2}%`;
          document.getElementById("class1output2").style.fontWeight = "bold";
          document.getElementById("class1output2").style.color = "yellow";
          const bar1height = (((value1 / value2) + (value3 / value4)) / 2) * 100;
          document.getElementById("class1bar").style.height = `${bar1height}%`;
      }
  });
  
  document.getElementById("class3fuelupdatebutton").addEventListener("click", function() {
    event.preventDefault()
    const numerator = parseFloat(document.getElementById("class3fuelonhand").value);
    const denominator = parseFloat(document.getElementById("class3fuelcapacity").value);
  
    if (denominator === 0) {
        document.getElementById("class3fueloutput").textContent = "Denominator cannot be zero";
    } else {
  
        const percentage = (numerator / denominator) * 100;
        document.getElementById("class3fueloutput").textContent = `${percentage}%`;
        document.getElementById("class3fueloutput").style.fontWeight = "bold";
        document.getElementById("class3fueloutput").style.color = "yellow";
        const percentage2 = (numerator / denominator) * 100;
        document.getElementById("class3output2").textContent = `${percentage2}%`;
        document.getElementById("class3output2").style.fontWeight = "bold";
        document.getElementById("class3output2").style.color = "yellow";
        const bar3height = (numerator / denominator) * 100;
        document.getElementById("class3bar").style.height = `${bar3height}%`;
    }
  });
  
  document.getElementById("class5ammoupdatebutton").addEventListener("click", function() {
    event.preventDefault()
    const numerator = parseFloat(document.getElementById("class5ammoonhand").value);
    const denominator = parseFloat(document.getElementById("class5ammocapacity").value);
  
    if (denominator === 0) {
        document.getElementById("class5ammooutput").textContent = "Denominator cannot be zero";
    } else {
  
        const percentage = (numerator / denominator) * 100;
        document.getElementById("class5ammooutput").textContent = `${percentage}%`;
        document.getElementById("class5ammooutput").style.fontWeight = "bold";
        document.getElementById("class5ammooutput").style.color = "yellow";
        const percentage2 = (numerator / denominator) * 100;
        document.getElementById("class5output2").textContent = `${percentage2}%`;
        document.getElementById("class5output2").style.fontWeight = "bold";
        document.getElementById("class5output2").style.color = "yellow";
        const bar5height = (numerator / denominator) * 100;
        document.getElementById("class5bar").style.height = `${bar5height}%`;
    }
  });
  
      function updateclass1CircleColor() {
        event.preventDefault()
        const input1 = document.getElementById("class1wateronhand");
        const input2 = document.getElementById("class1watercapacity");
        const input3 = document.getElementById("class1foodonhand");
        const input4 = document.getElementById("class1foodcapacity");
        const circle = document.getElementById("aclass1circle");
        const bar = document.getElementById("class1bar");
        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);
        const value3 = parseFloat(input3.value);
        const value4 = parseFloat(input4.value);
  
        if (!isNaN(value1) && !isNaN(value2)) {
          const result = (((value1 / value2) + (value3 / value4)) / 2) * 100;
  
          if (result > 85) {
            circle.style.backgroundColor = "lime";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "lime";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 60) {
            circle.style.backgroundColor = "yellow";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "yellow";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 30) {
            circle.style.backgroundColor = "red";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "red";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 0) {
            circle.style.backgroundColor = "black";
            circle.style.color = "white";
            bar.style.backgroundColor = "black";
            bar.style.color = "white";
            bar.style.borderColor = "white";
          } else {
            circle.style.backgroundColor = "rgb(0, 191, 255)";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "rgb(0, 191, 255)";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          }
        }
      };
  
      function updateclass3CircleColor() {
        event.preventDefault()
        const input1 = document.getElementById("class3fuelonhand");
        const input2 = document.getElementById("class3fuelcapacity");
        const circle = document.getElementById("aclass3circle");
        const bar = document.getElementById("class3bar");
        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);
  
        if (!isNaN(value1) && !isNaN(value2)) {
          const result = (value1 / value2) * 100;
  
          if (result > 85) {
            circle.style.backgroundColor = "lime";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "lime";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 60) {
            circle.style.backgroundColor = "yellow";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "yellow";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 30) {
            circle.style.backgroundColor = "red";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "red";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 0) {
            circle.style.backgroundColor = "black";
            circle.style.color = "white";
            bar.style.backgroundColor = "black";
            bar.style.color = "white";
            bar.style.borderColor = "white";
          } else {
            circle.style.backgroundColor = "rgb(0, 191, 255)";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "rgb(0, 191, 255)";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          }
        }
      };
  
      function updateclass5CircleColor() {
        event.preventDefault()
        const input1 = document.getElementById("class5ammoonhand");
        const input2 = document.getElementById("class5ammocapacity");
        const circle = document.getElementById("aclass5circle");
        const bar = document.getElementById("class5bar");
        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);
  
        if (!isNaN(value1) && !isNaN(value2)) {
          const result = (value1 / value2) * 100;
  
          if (result > 85) {
            circle.style.backgroundColor = "lime";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "lime";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 60) {
            circle.style.backgroundColor = "yellow";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "yellow";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 30) {
            circle.style.backgroundColor = "red";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "red";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          } else if (result > 0) {
            circle.style.backgroundColor = "black";
            circle.style.color = "white";
            bar.style.backgroundColor = "black";
            bar.style.color = "white";
            bar.style.borderColor = "white";
          } else {
            circle.style.backgroundColor = "rgb(0, 191, 255)";
            circle.style.color = "black";
            circle.style.borderColor = "black";
            bar.style.backgroundColor = "rgb(0, 191, 255)";
            bar.style.color = "black";
            bar.style.borderColor = "black";
          }
        }
      };
  
       // Function to update the time
       function updateclass1Time() {
        const now = new Date();
        const timeElement = document.getElementById('class1updatetime');
        timeElement.textContent = now.toLocaleTimeString();
        timeElement.style.color = "yellow";
        timeElement.style.fontWeight = "bold";
        const timeElement2 = document.getElementById('class1updatetime2')
        timeElement2.textContent = now.toLocaleTimeString();
        timeElement2.style.color = "yellow";
        timeElement2.style.fontWeight = "bold";
    };
  
    function updateclass3Time() {
      const now = new Date();
      const timeElement = document.getElementById('class3updatetime');
      timeElement.textContent = now.toLocaleTimeString();
      timeElement.style.color = "yellow";
      timeElement.style.fontWeight = "bold";
      const timeElement2 = document.getElementById('class3updatetime2')
      timeElement2.textContent = now.toLocaleTimeString();
      timeElement2.style.color = "yellow";
      timeElement2.style.fontWeight = "bold";
  };
  
  function updateclass5Time() {
    const now = new Date();
    const timeElement = document.getElementById('class5updatetime');
    timeElement.textContent = now.toLocaleTimeString();
    timeElement.style.color = "yellow";
    timeElement.style.fontWeight = "bold";
    const timeElement2 = document.getElementById('class5updatetime2')
    timeElement2.textContent = now.toLocaleTimeString();
    timeElement2.style.color = "yellow";
    timeElement2.style.fontWeight = "bold";
  };
  
  function openmenu() {
    event.preventDefault;
    const bar1 = document.getElementById("bar1");
    bar1.style.rotate = "45deg"
    bar1.style.backgroundColor = "red"
    bar1.style.top = "35px"
    bar1.style.left = "10px"
    const bar2 = document.getElementById("bar2");
    bar2.style.display = "none"
    const bar3 = document.getElementById("bar3");
    bar3.style.rotate = "135deg"
    bar3.style.backgroundColor = "red"
    bar3.style.top = "35px"
    bar3.style.left = "10px"
    const menu = document.getElementById("minimenu");
    menu.style.display = "block"
  };
  
  