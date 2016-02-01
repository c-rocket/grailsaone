package com.oracle.grails.aone

import grails.test.spock.IntegrationSpec
import grails.transaction.Rollback;
import com.oracle.grails.aone.Item;

@Rollback
class CommentIntegrationSpec extends IntegrationSpec {

    def setup() {
    }

    def cleanup() {
    }

   void "test that items are returned"() {
		when:
		List comments = Comment.findAll()
		
		then:
		comments.size() > 0
    }
}
