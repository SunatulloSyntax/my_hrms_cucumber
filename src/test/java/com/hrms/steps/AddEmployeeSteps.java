package com.hrms.steps;

import org.junit.Assert;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.ConfigsReader;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddEmployeeSteps extends CommonMethods {


	@Given("I logged into HRMS")
	public void i_logged_into_HRMS() {
		login.login(ConfigsReader.getProperty("username"), ConfigsReader.getProperty("password"));
	  
	}
	
	@Then("I navigate to Add Employee List")
	public void i_navigate_to_Add_Employee_List() {
		dashboard.navigateToAddEmployee();
	}

	@When("I add {string}, {string} and {string}")
	public void i_add_and(String fName, String mName, String lName) {
		sendText(addEmp.firstName, fName);
		sendText(addEmp.middleName, mName);
		sendText(addEmp.lastName, lName);
	}

	@Then("I click on save button")
	public void i_click_on_save_button() {
		click(addEmp.saveBtn);
	}

	@Then("I see employee has been successfully added")
	public void i_see_employee_has_been_successfully_added()  {
		boolean expected = addEmp.profileName.isDisplayed();
		System.out.println("New employee added successfully!");
		Assert.assertTrue("Profile name is not displayed", expected);
	}

}
