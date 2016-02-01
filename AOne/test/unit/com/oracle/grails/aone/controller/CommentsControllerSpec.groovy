package com.oracle.grails.aone.controller

import com.oracle.grails.aone.CommentService;
import com.oracle.grails.aone.CommentsController;
import com.oracle.grails.aone.Item;
import com.oracle.grails.aone.ItemsController;

import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.web.ControllerUnitTestMixin} for usage instructions
 */
@TestFor(CommentsController)
@Mock(CommentService)
class CommentsControllerSpec extends Specification {

	def setup() {
	}

	def cleanup() {
	}

	void "test find comments for item"() {
		when:
		def comments = [["hi":"bye"]]
		def mock = [findCommentsForItem: {itemId-> return comments }] as CommentService
		controller.commentService = mock
		controller.params.itemId = 5
		controller.getComments()

		then:
		response.text == '[{"hi":"bye"}]'
	}

	void "test create comment"() {
		when:
		def comment = ["hi":"bye"]
		def mock = [create: {obj-> return comment}] as CommentService
		controller.commentService = mock
		controller.newComment()

		then:
		response.text == '{"hi":"bye"}'
	}
}
