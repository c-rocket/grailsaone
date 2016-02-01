package com.oracle.grails.aone

import grails.test.spock.IntegrationSpec
import grails.transaction.Rollback;
import com.oracle.grails.aone.Item;

@Rollback
class ItemIntegrationSpec extends IntegrationSpec {

    def setup() {
    }

    def cleanup() {
    }

   void "test that items are returned"() {
		when:
		List items = Item.findAll()
		
		then:
		items.size() > 0
    }
}
