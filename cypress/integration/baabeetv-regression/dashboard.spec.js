
const login = (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://dev--ecstatic-austin-47718a.netlify.app/login')
  cy.get('#field-1').clear();
  cy.get('#field-1').type(username);
  cy.get('#field-2').clear();
  cy.get('#field-2').type(password);
  cy.get('.css-lj9e52').click();
  cy.wait(10000)
  Cypress.Cookies.preserveOnce('session_id', 'remember_token');
}


const feedback = ()=>{
  cy.contains('Your Feedback').should('be.visible')
  cy.get('.css-1t58pvn').should('be.visible')
  cy.get('.css-s2ngm8').should('be.visible')
  cy.get('.css-uv7gtw').should('be.visible')
  cy.get('.css-1f2k2gl').should('be.visible')
  cy.get('.css-i174b6').should('be.visible')
  cy.contains("Didn't like").should('be.visible')
  cy.contains('Satisfactory').should('be.visible')
  cy.contains('Loved It').should('be.visible')
  cy.contains('Anything else do you want to convery?').should('be.visible')
  cy.get('.chakra-textarea').should('be.visible')
  cy.get('.css-ohz50h > .chakra-button').should('be.visible')
  cy.get('.chakra-modal__close-btn').should('be.visible').click()
}

const loginAdmin = ()=>{
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://dev--sharp-visvesvaraya-cbe343.netlify.app/login")
      cy.get('#field-1').clear();
      cy.get('#field-1').type('admin@gmail.com');
      cy.get('#field-2').clear();
      cy.get('#field-2').type('BaabeeTv123$');
      cy.get('.css-lj9e52').click();
      cy.wait(10000)
      Cypress.Cookies.preserveOnce('session_id', 'remember_token');
}

const removeBatch = ()=>{
  loginAdmin()
  cy.get('.css-1cmb0i7 > :nth-child(3) > .chakra-stack').click();
  cy.get('.css-1cmb0i7 > :nth-child(3) > .chakra-stack').trigger('mouseover')
  cy.wait(5000)
  // cy.xpath("//input[@placeholder='Search for Batches']").clear();
  cy.xpath("//input[@placeholder='Search for Batches']").click({ force: true }).type('Automation');
  cy.get('.chakra-stack > .chakra-button').click();
  cy.get('.css-fzqv3i').click();
  cy.get('.css-1yt8peq').click();
}

const createBatch=()=>{
  cy.get('.css-1cmb0i7 > :nth-child(3) > .chakra-stack').click();
      cy.get('.chakra-wrap__list > :nth-child(2) > .chakra-button').click();
      cy.xpath("//input[@name='displayId']").clear();
      cy.xpath("//input[@name='displayId']").type('Automation Test');
      cy.get(':nth-child(1) > .chakra-form-control > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-8mmkcg').click();
      cy.get('#react-select-3-option-0').click();
      cy.get(':nth-child(3) > :nth-child(2) > .chakra-form-control > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-8mmkcg').click();
      cy.get('#react-select-4-input').clear();
      cy.get('#react-select-4-input').type('B');
      cy.get('#react-select-4-option-10').click();
      cy.get('.css-1sowyjy > .chakra-form-control > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click();
      cy.get('#react-select-5-input').clear();
      cy.get('#react-select-5-input').type('Vishal');
      cy.get('#react-select-5-option-70').click();
      cy.get(':nth-child(1) > form > .css-1s1xcap > .chakra-button').click();
      cy.get('form > :nth-child(4) > .chakra-stack > :nth-child(1)').click();
      cy.get(':nth-child(4) > .chakra-stack > :nth-child(7)').click();
      cy.get(':nth-child(2) > form > .css-1s1xcap > .chakra-button').click();
      cy.wait(10000);
}

// 'vishalvrk971@gmail.com'
// 'Test@1234'


describe('Baabee TV Student Portal', function(){

  before(()=>{
    cy.clearCookies();
    cy.clearLocalStorage();
  })

    it('Login - create user from admin dashboard - Login as student - enter valid/ Invalid username/password - Forgot password', () => {
      login("vishalvrk971@gmail.com","Test@1234")
    });

    it('Dashboard - Welcome ${student.name} - validate courses enrolled from admin panel - validate the learning hours - click on view my classes and check if user is navigated to my courses', () => {
      // Dashboard
      cy.get('.css-vz7deu > :nth-child(3) > .chakra-heading').should('have.text', 'Dashboard').then($button => {
        $button.css('border', '1px solid magenta')
      })
    cy.get(':nth-child(4) > .chakra-heading').should('have.text', 'Welcome Vishal Vaitheeswaran').then($button => {
        $button.css('border', '1px solid magenta')
      })
    cy.get('.css-vz7deu > .css-1kglu9v > :nth-child(1)').then($button => {
        $button.css('border', '1px solid magenta')
      })
    cy.get('.css-vz7deu > .css-1kglu9v > :nth-child(2)').then($button => {
        $button.css('border', '1px solid magenta')
      })
    cy.get('.css-vz7deu > .chakra-button').should('have.text', 'View my Classes').then($button => {
        $button.css('border', '1px solid magenta')
      })
    });

    it('Expiring courses - validate the expiring courses functionality', () => {
      cy.contains('Expiring Courses')
      cy.contains('No Expiring Courses')
    });

    it('Todays Classes - validate todays classes functionality', () => {
      cy.contains("Today's Class")
      cy.contains('No Classes Today')
    });

    it('Announcement - validate announcement functionality', () => {
         cy.contains('Announcements')
      cy.contains('No Announcements')
    });

    it('Learning Streak - In Progress', () => {
      cy.contains('Learning Streak')
    });

    it('Refer A Friend - validate refer a friend functionality', () => {
      cy.contains('Refer A Friend')
      cy.contains('Refer a friend and you can get 10% off on your next month’s fee')
      cy.get('.chakra-input').should('be.visible');
      cy.get('.chakra-stack > .chakra-button').should('have.text', 'Copy Link')
    });

    it('Baabee leaderboard - validate the score from leaderboard', () => {
      cy.contains('Baabee Leaderboard')
    });

    it('Suggested Courses - view list of available courses', () => {
      cy.contains('Suggested Courses')
      cy.get('.chakra-link > .chakra-button').should('have.text', 'View More')
      cy.xpath("//a[contains(@class,'chakra-link')]").should('have.text', 'View More').invoke('removeAttr','target').click()
      cy.url().should('eq', 'https://www.baabeetv.com/')
      cy.go('back')
    });

    it('My Classes Empty state', () => {
      login("vishalvrk971@gmail.com","Test@1234")
      cy.get('.css-vz7deu > .chakra-button').click();
      cy.wait(2000);
      cy.contains('My Classes')
      cy.contains('Suggested Courses')
      cy.contains('Upcoming Classes')
      cy.contains('Completed Classes')
      cy.contains('There are no upcoming classes')
      cy.contains('Completed Classes').click()
      cy.contains('There are no completed classes')
    });

     it('Reschedule Requests Empty state', () => {
      cy.contains('Reschedule Requests')
      cy.contains('Requests By Teacher')
      cy.contains('Requests By Teacher').click()
      cy.contains('There are no rescheduled requests by teachers')
    });

    it('Create New Batch from Admin | Reschedule requests by teacher', () => {
      loginAdmin()
      createBatch()
      cy.get('.chakra-input').clear();
      cy.get('.chakra-input').type('Vishal');
      cy.get('.css-18n40vl > :nth-child(2)').click();

      cy.contains('View Details').click()
      cy.get('.css-1gfsy8').click();
      cy.get('form > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
      cy.get(':nth-child(5) > :nth-child(7) > .MuiButtonBase-root > .MuiIconButton-label').click();
      cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click();
      cy.get('.css-jbl35k').click();
    });

    it('My Classes - Upcoming Classes', () => {
      login("vishalvrk971@gmail.com","Test@1234")
      cy.get('.css-vz7deu > .chakra-button').click();
      // cy.clock()
      cy.wait(2000);
      // cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Mastering Chess')])[1]").should('be.visible')
      // cy.xpath("//span[contains(text(),'Starts in')]").should('be.visible')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Mastering Chess Class')])[1]").should('be.visible')
      cy.xpath("(//p[contains(@class,'chakra-text') and contains(text(),'Mastering Chess')])[1]").should('be.visible')
      cy.xpath("(//button[contains(text(),'Join Class')])[1]").should('be.visible')
      cy.xpath("(//button[contains(text(),'Reschedule')])[1]").should('be.visible')
      // cy.tick(8000)
      // cy.xpath("(//button[contains(text(),'Join Class')])[1]").should('be.visible').click()
    }); 

   

    it('Reschedule Requests - Requests by student - validate functionality - Empty state', () => {
      cy.contains('Requests By You')
      cy.contains('Requests By You').click()
      cy.contains('There are no rescheduled requests by you')
    });

    
    it('Remove Batch', () => {
      removeBatch()
    });

    it('Settings Page - Account - Student - Parent - Add/Edit', () => {
      login("vishalvrk971@gmail.com","Test@1234")
      cy.get('.css-1cmb0i7 > :nth-child(4) > .chakra-stack > .css-1403771 > .css-1l7gpd').click();
      //   cy.get('.css-1cmb0i7 > :nth-child(4) > .chakra-stack > .css-1403771 > .css-1l7gpd')
      cy.get('.chakra-wrap__list > :nth-child(1) > .chakra-heading').should('have.text', 'Settings')
      cy.get('.css-1qvrtv4 > picture > img')
      cy.get('.css-1vp6h26').should('have.text', 'Vishal')

      cy.contains('Account')
      cy.contains('Edit and manage your account details')
      cy.contains('Badges earned').click()
      cy.contains('Congratulations on earning these badges')

      //   cy.contains('Top 10 Finisher')
      //   cy.contains('Tournament Winner')
      cy.contains('BaaBee Points')
      cy.get('.chakra-stack > .chakra-button').should('have.text', 'Log Out')
      //   cy.contains('KID')
      //   cy.contains('PARENT')
     
      // cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Date of Birth')])[1]//following::p[1]").should('have.text', 'April 20, 1997')
      // cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Age')])[1]//following::p[1]").should('have.text', '24')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Phone')])[1]//following::p[1]").should('have.text', '+91 8667428082')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'School')])[1]//following::p[1]").should('have.text', 'SBOA')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Email')])[1]//following::p[1]").should('have.text', 'vishalvrk971@gmail.com')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'City')])[1]//following::p[1]").should('have.text', 'Chennai')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', 'Boopesh Mahendran')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Relation')])[1]//following::p[1]").should('have.text', 'Father')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Phone')])[1]//following::p[1]").should('have.text', '+91 9629526838')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Email')])[1]//following::p[1]").should('have.text', 'boopesh2272@gmail.com')
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Name')])[1]")

       cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', 'Vishal Vaitheeswaran')
      var randomNumber = 'Vishal Test '+ Math.floor(Math.random() * 100);
      cy.xpath("(//p[contains(text(),'Name')]//following::img)[1]").click();
      cy.xpath("//input[@name='name']").clear();
      cy.xpath("//input[@name='name']").type(randomNumber);
      cy.wait(2000)
      cy.get('.css-130odvk > .chakra-button').click();
       cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', randomNumber)
       cy.contains(randomNumber)
       cy.wait(2000)
      cy.xpath("(//p[contains(text(),'Name')]//following::img)[2]").click({force:true});
      cy.xpath("//input[@name='name']").clear();
      cy.xpath("//input[@name='name']").type('Vishal Vaitheeswaran')
      cy.get('.css-130odvk > .chakra-button').click();
       cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', 'Vishal Vaitheeswaran')
       cy.contains('Vishal Vaitheeswaran')

  //     //  Image
      cy.wait(2000)
      cy.xpath("(//button[@aria-label='camera'])[1]").click()
      cy.wait(2000)
      cy.fixture('tiles.PNG').then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'tiles.PNG',
            mimeType: 'image/png'
        });
    });
    cy.wait(2000)
    cy.xpath("//button[contains(text(),'Save')]").click()

      cy.get(':nth-child(1) > :nth-child(2) > .chakra-stack > .chakra-image').click();
      cy.get(':nth-child(2) > .chakra-form-control > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
      cy.get(':nth-child(1) > .MuiButton-label > .MuiTypography-root').click();
      // cy.get('.MuiPickersYear-yearSelected').click();
      cy.get('.MuiPickersYearSelection-container > :nth-child(97)').click()
      cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click();
      cy.get('.css-130odvk > .chakra-button').click();
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Age')])[1]//following::p[1]").should('have.text', '25')

      cy.get(':nth-child(1) > :nth-child(2) > .chakra-stack > .chakra-image').click();
      cy.get(':nth-child(2) > .chakra-form-control > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click();
      cy.get(':nth-child(1) > .MuiButton-label > .MuiTypography-root').click();
      cy.get('.MuiPickersYearSelection-container > :nth-child(98)').click();
      cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click();
      cy.get('.css-130odvk > .chakra-button').click();
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'Age')])[1]//following::p[1]").should('have.text', '24')
      cy.wait(2000)

  //   // School Change
      cy.xpath("(//p[contains(text(),'School')]//following::img)[1]").click({force:true});
      cy.xpath("//textarea[@name='school']").clear()
      cy.xpath("//textarea[@name='school']").type("SBOA JR College")
      cy.get('.css-130odvk > .chakra-button').click();
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'School')])[1]//following::p[1]").should('have.text', 'SBOA JR College')
      cy.wait(2000)
      cy.xpath("(//p[contains(text(),'School')]//following::img)[1]").click({force:true});
      cy.xpath("//textarea[@name='school']").clear()
      cy.xpath("//textarea[@name='school']").type("SBOA")
      cy.get('.css-130odvk > .chakra-button').click();
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'School')])[1]//following::p[1]").should('have.text', 'SBOA')
      cy.wait(2000)

  //     // City Change
      cy.xpath("(//p[contains(text(),'City')]//following::img)[1]").click({force:true});
      cy.xpath("//input[@name='city']").clear()
      cy.xpath("//input[@name='city']").type("Banglore")
      cy.get('.css-130odvk > .chakra-button').click();
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'City')])[1]//following::p[1]").should('have.text', 'Banglore')

      cy.xpath("(//p[contains(text(),'City')]//following::img)[1]").click({force:true});
      cy.xpath("//input[@name='city']").clear()
      cy.xpath("//input[@name='city']").type("Chennai")
      cy.get('.css-130odvk > .chakra-button').click();
      cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Vishal') ]//following::p[contains(text(),'City')])[1]//following::p[1]").should('have.text', 'Chennai')
    
    
  //    // Father Image
     cy.wait(2000)
     cy.xpath("(//button[@aria-label='camera'])[2]").click()
     cy.wait(2000)
     cy.fixture('img.png').then(fileContent => {
       cy.get('input[type="file"]').attachFile({
           fileContent: fileContent.toString(),
           fileName: 'tiles.PNG',
           mimeType: 'image/png'
       });
   });
   cy.xpath("//button[contains(text(),'Save')]").click()

  //  Fathers Name

  cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', 'Boopesh Mahendran')
  var randomNumber = 'Boopesh Test '+ Math.floor(Math.random() * 100);
  cy.xpath("(//p[contains(text(),'Name')]//following::img[1])[2]").click();
  cy.xpath("//input[@name='parentName']").clear();
  cy.xpath("//input[@name='parentName']").type(randomNumber);
  cy.wait(2000)
  cy.get('.css-130odvk > .chakra-button').click();
  cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', randomNumber)
   cy.contains(randomNumber)
   cy.wait(2000)
  cy.xpath("(//p[contains(text(),'Name')]//following::img[1])[2]").click({force:true});
  cy.xpath("//input[@name='parentName']").clear();
  cy.xpath("//input[@name='parentName']").type('Boopesh Mahendran')
  cy.get('.css-130odvk > .chakra-button').click();
  cy.xpath("(//h2[contains(@class,'chakra-heading') and contains(text(),'Boopesh') ]//following::p[contains(text(),'Name')])[1]//following::p[1]").should('have.text', 'Boopesh Mahendran')
   cy.contains('Boopesh Mahendran')
    });


    it('Parents Portal - Dont have access - Logout', () => {
      login("vishalvrk971@gmail.com","Test@1234")
      cy.get('.css-1cmb0i7 > :nth-child(5) > .chakra-stack').click();
      cy.get('.css-1cmb0i7 > :nth-child(5) > .chakra-stack > .chakra-heading').click();
      cy.contains('You are not Allowed in here')
      cy.contains('This page is accessible only to parents. Please logout and login as parent to access this page.')
      cy.contains('Log Out')
    });

    it('Homework Show list of selected courses in tab - empty state', () => {
      login("vishalvrk971@gmail.com","Test@1234")
      cy.get(':nth-child(6) > .chakra-stack').click();
      cy.get('.css-1idynls > .chakra-heading').should('have.text',"Homework")
      cy.contains('Mastering Chess')
      cy.contains('No homework')
    });





})

