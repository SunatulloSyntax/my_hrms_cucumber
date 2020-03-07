package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;

public class AddEmployeePageElements {
		
	@FindBy(id="firstName")
	public WebElement firstName;
	
	@FindBy(name="middleName")
	public WebElement middleName;
	
	@FindBy(id = "chkLogin")
	public WebElement createLoginDetails;

	@FindBy(id = "employeeId")
	public WebElement empId;
	
	@FindBy(name="lastName")
	public WebElement lastName;
	
	@FindBy(id="btnSave")
	public WebElement saveBtn;
	
	@FindBy(id = "re_password")
	public WebElement confirmUserPassword;
	
	@FindBy(id="profile-pic")
	public WebElement profileName;
	
	public AddEmployeePageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
}
