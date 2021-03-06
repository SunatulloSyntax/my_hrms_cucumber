package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

public class LoginPageElements extends CommonMethods{

	@FindBy(xpath = "//div[@id='divLogo']")
	public WebElement logo;

	@FindBy(id = "loginPanelHeading")
	public WebElement loginLabel;

	@FindBy(name = "txtUsername")
	public WebElement username;

	@FindBy(css = "input#txtPassword")
	public WebElement password;

	@FindBy(css = "input[name='Submit']")
	public WebElement loginBtn;

	@FindBy(id = "spanMessage")
	public WebElement errorMsg;
	

//	this is Constructor of the 'LoginPageElements' class.
	public LoginPageElements() {
		PageFactory.initElements(BaseClass.driver, this); // .initElements() -> initializes instance variables above.
	}
	
	public void login(String uid, String pwd) {
		sendText(username, uid);
		sendText(password, pwd);
		click(loginBtn);
	}

}
