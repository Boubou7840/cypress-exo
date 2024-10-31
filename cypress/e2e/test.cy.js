/// <reference types="cypress"/>

describe("scenario 1: connexion ok", function () {
  it("acceder au site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=inventory-item-name]").should("be.visible");
  });
});

describe("scenario 2: connexion ko", function () {
  it("accedee au site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("user").should("have.value", "user");
    cy.get("[data-test=password")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=error]")
      .should("be.visible")
      .should("contain.text", "username and password do not match");
  });
});
describe("scenario 3: connexion ko ", function () {
  it("accedee au site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("user").should("have.value", "user");
    cy.get("[data-test=password")
      .type("secretsauce")
      .should("have.value", "secretsauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=error]")
      .should("be.visible")
      .should("contain.text", "Username and password do not match");
  });
});

describe("exercice2 : exercice1", function () {
  it("Scenario1", function () {
    cy.visit("https://practice.automationtesteracademy.com");
    cy.get('[data-test="logo-img"]').should("be.visible");
    cy.get('[data-test="username-login"]')
      .type("login_user")
      .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("cypress-geek")
      .should("have.value", "cypress-geek");
    cy.get('[data-test="submit-login"]').click();
    cy.get("[data-test=p-contact]").should("contain", "Contactez nous!");
    cy.get(".grid-container img").should("have.length", 8);
  });
});

describe("selction: produit1", function () {
  it.only("acceder au site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=inventory-item-name]").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("[data-test=add-to-cart-sauce-labs-bolt-t-shirt]")
      .should("be.visible")
      .click();
    cy.get('[data-test="shopping-cart-badge"]')
      .should("have.text", "2")
      .click();
    cy.get('[data-test="inventory-item"]').should("have.length", "2");
    cy.get('[data-test="title"]')
      .should("be.visible")
      .and("contain", "Your Cart");
    cy.get('[data-test="cart-list"]').should("contain", 2);
    cy.get('[data-test="checkout"]').should("be.visible").click();
    cy.get('[data-test="firstName"]')
      .type("nabil")
      .should("have.value", "nabil");
      cy.get('[data-test="lastName"]').type('barka').should("have.value",'barka');
      cy.get('[data-test="postalCode"]').type('78240').should("have.value",78240);
      cy.get('[data-test="continue]"]').click();
      cy.url().should("include", "/checkout-step-two.html");
      cy.get('[data-test="finish]').click();
      cy.contains('Thank you for your order!');
      cy.get('[data-test="back-to-products]').click();

  });
});
