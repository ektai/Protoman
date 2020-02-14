// source: model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.api_proto.FullDefaultQuestion');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api_proto.Answer');
goog.require('proto.api_proto.DefaultQuestion');
goog.require('proto.api_proto.Space');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api_proto.FullDefaultQuestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_proto.FullDefaultQuestion.repeatedFields_, null);
};
goog.inherits(proto.api_proto.FullDefaultQuestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_proto.FullDefaultQuestion.displayName = 'proto.api_proto.FullDefaultQuestion';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_proto.FullDefaultQuestion.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api_proto.FullDefaultQuestion.prototype.toObject = function(opt_includeInstance) {
  return proto.api_proto.FullDefaultQuestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_proto.FullDefaultQuestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.FullDefaultQuestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    question: (f = msg.getQuestion()) && proto.api_proto.DefaultQuestion.toObject(includeInstance, f),
    space: (f = msg.getSpace()) && proto.api_proto.Space.toObject(includeInstance, f),
    answersList: jspb.Message.toObjectList(msg.getAnswersList(),
    proto.api_proto.Answer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api_proto.FullDefaultQuestion}
 */
proto.api_proto.FullDefaultQuestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_proto.FullDefaultQuestion;
  return proto.api_proto.FullDefaultQuestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_proto.FullDefaultQuestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_proto.FullDefaultQuestion}
 */
proto.api_proto.FullDefaultQuestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_proto.DefaultQuestion;
      reader.readMessage(value,proto.api_proto.DefaultQuestion.deserializeBinaryFromReader);
      msg.setQuestion(value);
      break;
    case 2:
      var value = new proto.api_proto.Space;
      reader.readMessage(value,proto.api_proto.Space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 3:
      var value = new proto.api_proto.Answer;
      reader.readMessage(value,proto.api_proto.Answer.deserializeBinaryFromReader);
      msg.addAnswers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api_proto.FullDefaultQuestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_proto.FullDefaultQuestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_proto.FullDefaultQuestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.FullDefaultQuestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_proto.DefaultQuestion.serializeBinaryToWriter
    );
  }
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api_proto.Space.serializeBinaryToWriter
    );
  }
  f = message.getAnswersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.api_proto.Answer.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefaultQuestion question = 1;
 * @return {?proto.api_proto.DefaultQuestion}
 */
proto.api_proto.FullDefaultQuestion.prototype.getQuestion = function() {
  return /** @type{?proto.api_proto.DefaultQuestion} */ (
    jspb.Message.getWrapperField(this, proto.api_proto.DefaultQuestion, 1));
};


/**
 * @param {?proto.api_proto.DefaultQuestion|undefined} value
 * @return {!proto.api_proto.FullDefaultQuestion} returns this
*/
proto.api_proto.FullDefaultQuestion.prototype.setQuestion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_proto.FullDefaultQuestion} returns this
 */
proto.api_proto.FullDefaultQuestion.prototype.clearQuestion = function() {
  return this.setQuestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_proto.FullDefaultQuestion.prototype.hasQuestion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Space space = 2;
 * @return {?proto.api_proto.Space}
 */
proto.api_proto.FullDefaultQuestion.prototype.getSpace = function() {
  return /** @type{?proto.api_proto.Space} */ (
    jspb.Message.getWrapperField(this, proto.api_proto.Space, 2));
};


/**
 * @param {?proto.api_proto.Space|undefined} value
 * @return {!proto.api_proto.FullDefaultQuestion} returns this
*/
proto.api_proto.FullDefaultQuestion.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_proto.FullDefaultQuestion} returns this
 */
proto.api_proto.FullDefaultQuestion.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_proto.FullDefaultQuestion.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Answer answers = 3;
 * @return {!Array<!proto.api_proto.Answer>}
 */
proto.api_proto.FullDefaultQuestion.prototype.getAnswersList = function() {
  return /** @type{!Array<!proto.api_proto.Answer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api_proto.Answer, 3));
};


/**
 * @param {!Array<!proto.api_proto.Answer>} value
 * @return {!proto.api_proto.FullDefaultQuestion} returns this
*/
proto.api_proto.FullDefaultQuestion.prototype.setAnswersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.api_proto.Answer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api_proto.Answer}
 */
proto.api_proto.FullDefaultQuestion.prototype.addAnswers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.api_proto.Answer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_proto.FullDefaultQuestion} returns this
 */
proto.api_proto.FullDefaultQuestion.prototype.clearAnswersList = function() {
  return this.setAnswersList([]);
};


