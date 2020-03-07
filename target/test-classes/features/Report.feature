#Feature: report
#
#Background:
 #
    #Given I enter valid username and valid password
    #And I click on login button
    #And I navigate to the Reports Page
#
#
  #Scenario: Search for invalid report
    #Given I enter valid username and valid password
    #And I click on login button
    #And I navigate to the Reports Page
    #When I enter invalid report
    #And I click search button
    #Then I see no record found error message
#
  #Scenario: Search for valid report
    #Given I enter valid username and valid password
    #And I click on login button
    #And I navigate to the Reports Page
    #When I enter valid report
    #And I click search button
    #Then I see search report is displayed
