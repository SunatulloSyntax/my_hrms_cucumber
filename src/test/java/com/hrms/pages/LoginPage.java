package com.hrms.pages;

import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.hrms.testbase.BaseClass;

public class LoginPage extends BaseClass{

   	public WebElement username = driver.findElement(By.id("txtUsername"));
   	public WebElement password = driver.findElement(By.id("txtPassword"));
   	public WebElement loginBtn = driver.findElement(By.id("btnLogin"));
//   	public WebElement errMsg = driver.findElement(By.id("spanMessage"));
   	public WebElement logo = driver.findElement(By.xpath("//div[@id='divLogo']"));
	
   	public  String errorMsg() {
   		WebElement errMsg;
   		try{errMsg = driver.findElement(By.id("spanMessage"));
		return errMsg.getText();
   		}catch(NoSuchElementException e) {
   			System.out.println("No such element found");
   			return null;
   		}
   		}
}
