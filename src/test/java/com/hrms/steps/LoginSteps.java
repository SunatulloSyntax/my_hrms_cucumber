package com.hrms.steps;

import org.junit.Assert;

import com.hrms.pages.LoginPageElements;
import com.hrms.utils.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends CommonMethods {

	LoginPageElements login;

	@Given("I open browser and navigate to the HRMS")
	public void i_open_browser_and_navigate_to_the_HRMS() {
		setUp();
		System.out.println("Browser is opened");
	}

	@When("I enter valid username and valid password")
	public void i_enter_valid_username_and_valid_password() {
		login = new LoginPageElements();
		sendText(login.username, "Admin");
		sendText(login.password, "Syntax@123");
	}

	@When("I click on login button")
	public void i_click_on_Login_button() {
		click(login.loginBtn);

	}

	@Then("I successfully logged in")
	public void i_successfully_logged_in() {
		System.out.println("I logged in");
	}

	@Then("I close browser")
	public void i_close_browser() {
		tearDown();
		System.out.println("Browser was successfully closed");
	}

	@When("I enter valid username and invalid password")
	public void i_enter_valid_username_and_invalid_password() {
		login = new LoginPageElements();
		sendText(login.username, "Admin");
		sendText(login.password, "342343");
	}

	@Then("I see error message")
	public void i_see_error_message() {
		boolean error = login.errorMsg.isDisplayed();
		Assert.assertTrue("Error message is not displayed", error);
	}

	@When("I enter {string} and {string}")
	public void i_enter_and(String Username, String Password) {
		login = new LoginPageElements();
		sendText(login.username, Username);
		sendText(login.password, Password);
	}

	@Then("I see {string}")
	public void i_see(String string) {
		boolean error = login.errorMsg.isDisplayed();
		Assert.assertTrue("Error message is not displayed", error);
	}

}
