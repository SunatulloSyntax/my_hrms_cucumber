#Author: syntax team(saeedaliev@gmail.com)
@sprint2,AddEmployee
Feature: Add Employee

  Background: 
    Given I logged into HRMS
    Then I navigate to Add Employee List

  @smoke
  Scenario: Add Employee
    When I add "Sam", "S" and "Smith"
    And I click on save button
    Then I see employee has been successfully added

  @regression
  Scenario Outline: Add new Employee
    When I add "<FirstName>", "<MiddleName>" and "<LastName>"
    And I click Save
    Then I see Employee with "<FirstName>", "<MiddleName>" and "<LastName>" is displayed

    Examples: 
      | FirstName | MiddleName | LastName |
      | James     |            | Smith    |
      | Jane      | J          | Smith    |
      | Sasha     | J          | Smith    |
      | David     | J          | Smith    |

  @smoke
  Scenario: Add and Modify Employee Details
    When I enter employee details
      | FirstName | MiddleName | LastName |
      | John      | J          | Smith    |
      
      
      
      
      
  #Scenario: Add Employee without employee id
    #When I add an employee
    #And I delete employee id
    #And I click on save button
    #Then I see employee without employee id is being added
#
  #Scenario: Add Employee negative scenario
    #When I click on save button
    #Then I see required error message next to the first and last name
#
  #Scenario: AddEmployee and Login Credendials
    #When I add an employee
    #And I click on create login checkbox
    #And I enter username, password and confirm password
    #When I click on save button
    #Then I verify employee successfully added
