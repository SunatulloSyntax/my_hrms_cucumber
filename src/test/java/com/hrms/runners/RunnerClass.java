package com.hrms.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
//		After creating "Login.features" we run this class to get name of the methods that we need to 
//		implement in "LoginSteps" class. 
//		In another words after creating Scenarios we should implement methods to initialize 
//		our Scenario
		features="src/test/resources/features"
	    , glue = "com/hrms/steps"
		, dryRun = false  // if run this class this will run the class "Login.features"
//		, dryRun = true   // if run this class this will verify if names of methods and Gherkin specs matches
//							if not it will show which method you should implement in "LoginSteps" class
		,plugin= {"pretty", "html:target/html/cucumber-default-report", "json:target/cucumber.json"}
		,monochrome=true
		,tags= {"@smoke"}
//		
		)

public class RunnerClass {

}








  


