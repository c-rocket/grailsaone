package com.oracle.grails.aone

import grails.test.spock.IntegrationSpec
import grails.transaction.Rollback;
import com.oracle.grails.aone.Item;

@Rollback
class UserIntegrationSpec extends IntegrationSpec {

    def setup() {
    }

    def cleanup() {
    }

   void "test that items are returned"() {
		when:
		List users = User.findAll()
		
		then:
		users.size() > 0
    }
}
