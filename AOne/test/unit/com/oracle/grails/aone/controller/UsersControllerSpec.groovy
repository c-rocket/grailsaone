package com.oracle.grails.aone.controller

import com.oracle.grails.aone.Item;
import com.oracle.grails.aone.ItemsController;
import com.oracle.grails.aone.UserService;
import com.oracle.grails.aone.UsersController;

import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(UsersController)
@Mock(UserService)
class UsersControllerSpec extends Specification {

	def setup() {
	}

	def cleanup() {
	}

	void "test change password good change"() {
		when:
		def mock = [changePassword: {email,oldpw,newpw-> return true }] as UserService
		controller.userService = mock
		controller.changePassword()

		then:
		response.text == 'true'
		response.status == 200
	}

	void "test change password bad change"() {
		when:
		def mock = [changePassword: {email,oldpw,newpw-> return false }] as UserService
		controller.userService = mock
		controller.changePassword()

		then:
		response.status == 404
	}

	void "test create user"() {
		when:
		def user = ["hi":"bye"]
		def mock = [create: {obj-> return user}] as UserService
		controller.userService = mock
		controller.createUser()

		then:
		response.text == '{"hi":"bye"}'
	}

	void "login - valid"() {
		when:
		def user = ["hi":"bye"]
		def mock = [login: {email,password-> return user}] as UserService
		controller.userService = mock
		controller.params.email = "email"
		controller.params.password = "password"
		controller.login()

		then:
		response.text == '{"hi":"bye"}'
	}

	void "login - invalid"() {
		when:
		def mock = [login: {email,password-> return null}] as UserService
		controller.userService = mock
		controller.params.email = "email"
		controller.params.password = "password"
		controller.login()

		then:
		response.text == '{}'
	}
}
