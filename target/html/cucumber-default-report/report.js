$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddEmployee.feature");
formatter.feature({
  "name": "Add Employee",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2,AddEmployee"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_logged_into_HRMS()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.hrms.utils.ConfigsReader.getProperty(ConfigsReader.java:31)\r\n\tat com.hrms.steps.AddEmployeeSteps.i_logged_into_HRMS(AddEmployeeSteps.java:17)\r\n\tat ✽.I logged into HRMS(file:src/test/resources/features/AddEmployee.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to Add Employee List",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigate_to_Add_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2,AddEmployee"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I add \"Sam\", \"S\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see employee has been successfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_employee_has_been_successfully_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_logged_into_HRMS()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.hrms.utils.ConfigsReader.getProperty(ConfigsReader.java:31)\r\n\tat com.hrms.steps.AddEmployeeSteps.i_logged_into_HRMS(AddEmployeeSteps.java:17)\r\n\tat ✽.I logged into HRMS(file:src/test/resources/features/AddEmployee.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I navigate to Add Employee List",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_navigate_to_Add_Employee_List()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add and Modify Employee Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2,AddEmployee"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter employee details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName"
      ]
    },
    {
      "cells": [
        "John",
        "J",
        "Smith"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint1,login"
    }
  ]
});
formatter.scenario({
  "name": "Valid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint1,login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter valid username and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_valid_username_and_valid_password()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:200)\r\n\tat com.hrms.steps.LoginSteps.i_enter_valid_username_and_valid_password(LoginSteps.java:25)\r\n\tat ✽.I enter valid username and valid password(file:src/test/resources/features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsename\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Syntax@123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1,login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsename\u003e\" and \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:200)\r\n\tat com.hrms.steps.LoginSteps.i_enter_and(LoginSteps.java:62)\r\n\tat ✽.I enter \"\u003cUsename\u003e\" and \"Admin123\"(file:src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1,login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsename\u003e\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:200)\r\n\tat com.hrms.steps.LoginSteps.i_enter_and(LoginSteps.java:62)\r\n\tat ✽.I enter \"\u003cUsename\u003e\" and \"\"(file:src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1,login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsename\u003e\" and \"Syntax@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:200)\r\n\tat com.hrms.steps.LoginSteps.i_enter_and(LoginSteps.java:62)\r\n\tat ✽.I enter \"\u003cUsename\u003e\" and \"Syntax@123\"(file:src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1,login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsename\u003e\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:200)\r\n\tat com.hrms.steps.LoginSteps.i_enter_and(LoginSteps.java:62)\r\n\tat ✽.I enter \"\u003cUsename\u003e\" and \"\"(file:src/test/resources/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "skipped"
});
});