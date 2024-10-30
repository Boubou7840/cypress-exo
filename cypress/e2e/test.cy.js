/// <reference types="cypress"/>

describe("scenario 1: connexion ok", function(){
  it("acceder au site",function(){
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("standard_user").should("have.value","standard_user");
    cy.get("[data-test=password]").type("secret_sauce").should("have.value","secret_sauce");
    cy.get('[data-test=login-button]').click()
    cy.get("[data-test=inventory-item-name]").should('be.visible')
  });
});

describe("scenario 2: connexion ko", function(){
  it("accedee au site", function(){
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("user").should("have.value","user");
    cy.get("[data-test=password").type("secret_sauce").should("have.value","secret_sauce")
    cy.get('[data-test=login-button]').click()
    cy.get('[data-test=error]').should('be.visible').should('contain.text','username and password do not match')
  });
});
describe("scenario 3: connexion ko ", function(){
  it("accedee au site", function(){
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("user").should("have.value","user");
    cy.get("[data-test=password").type("secretsauce").should("have.value","secretsauce")
    cy.get('[data-test=login-button]').click() 
    cy.get('[data-test=error]').should('be.visible').should('contain.text','Username and password do not match')
  });
  });


describe('exercice2 : exercice1',function(){
  it.only("Scenario1", function () {
    cy.visit("https://practice.automationtesteracademy.com");
    cy.get('[data-test="logo-img"]').should("be.visible");
    cy.get('[data-test="username-login"]').type("login_user").should("have.value", "login_user");  
    cy.get('[data-test="password-login"]').type("cypress-geek").should("have.value", "cypress-geek");  
    cy.get('[data-test="submit-login"]').click();
    cy.get('[data-test=p-contact]').should('contain','Contactez nous!')  
    cy.get(".grid-container img").should("have.length", 8);
  });
});


