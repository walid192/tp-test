# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestHomework():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_homework(self):
    self.driver.get("https://safatelli.github.io/tp-test-logiciel/assets/hello.html")
    self.driver.set_window_size(1246, 812)
    self.driver.find_element(By.ID, "username").click()
    self.driver.find_element(By.ID, "username").send_keys("walid")
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    self.driver.find_element(By.ID, "message").click()


    self.driver.find_element(By.ID, "username").clear()
    self.driver.find_element(By.ID, "username").send_keys("test")
    self.driver.find_element(By.CSS_SELECTOR, "button").click()

    message_text = self.driver.find_element(By.ID, "message").text
    assert "Hello, test!" in message_text

    time.sleep(2)  
    self.driver.find_element(By.ID, "username").clear()
    self.driver.find_element(By.ID, "username").send_keys("update")
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    message_text = self.driver.find_element(By.ID, "message").text
    assert "Hello, update!" in message_text

    time.sleep(2)
    self.driver.find_element(By.ID, "username").clear()
    self.driver.find_element(By.ID, "username").send_keys("invalid")
    self.driver.find_element(By.CSS_SELECTOR, "button").click()
    message_text = self.driver.find_element(By.ID, "message").text
    assert "Hello, invalid!" in message_text 
    self.driver.close()
  