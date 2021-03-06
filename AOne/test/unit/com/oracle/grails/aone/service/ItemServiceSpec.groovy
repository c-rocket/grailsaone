package com.oracle.grails.aone.service

import com.oracle.grails.aone.Item;
import com.oracle.grails.aone.ItemService;
import com.oracle.grails.aone.User

import grails.test.mixin.TestFor
import grails.test.mixin.domain.DomainClassUnitTestMixin;
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.services.ServiceUnitTestMixin} for usage instructions
 */
@TestFor(ItemService)
@Mock([Item])
@TestMixin(DomainClassUnitTestMixin)
class ItemServiceSpec extends Specification {

	def setup() {
	}

	def cleanup() {
	}

	void "test formating of item returned for find all"() {
		when:
		def postedBy = new User(id:2, gravatar:"GRAVATAR")
		def boughtBy = new User(id:1)
		def items = [
			new Item(id:5,title:"test title",boughtBy:boughtBy,description:"DESCRIPTION",postedBy:postedBy,price:15,status:"CLOSED")
		]
		Item.metaClass.'static'.findAll = {->return items}
		def all = service.findAll()

		then:
		all.size() == 1
		def first = all[0]
		first.ITEM_ID == 5
		first.ITEM_TITLE == "test title"
		first.ITEM_DESC == "DESCRIPTION"
		first.ITEM_POST_DATE == null
		first.ITEM_POSTED_BY == 2
		first.ITEM_BOUGHT_BY == 1
		first.ITEM_PRICE == 15
		first.ITEM_STATUS == "CLOSED"
		first.USER_GRAVATAR == "GRAVATAR"
	}
}
