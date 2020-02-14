// source: model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.api_proto.AnyQuestion4_2');
goog.provide('proto.api_proto.AnyQuestion4_2.QuestionCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api_proto.CustomQuestion4_2');
goog.require('proto.api_proto.DefaultQuestion');

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
proto.api_proto.AnyQuestion4_2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api_proto.AnyQuestion4_2.oneofGroups_);
};
goog.inherits(proto.api_proto.AnyQuestion4_2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_proto.AnyQuestion4_2.displayName = 'proto.api_proto.AnyQuestion4_2';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api_proto.AnyQuestion4_2.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.api_proto.AnyQuestion4_2.QuestionCase = {
  QUESTION_NOT_SET: 0,
  DEFAULT_QUESTION: 1,
  CUSTOM_QUESTION: 2
};

/**
 * @return {proto.api_proto.AnyQuestion4_2.QuestionCase}
 */
proto.api_proto.AnyQuestion4_2.prototype.getQuestionCase = function() {
  return /** @type {proto.api_proto.AnyQuestion4_2.QuestionCase} */(jspb.Message.computeOneofCase(this, proto.api_proto.AnyQuestion4_2.oneofGroups_[0]));
};



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
proto.api_proto.AnyQuestion4_2.prototype.toObject = function(opt_includeInstance) {
  return proto.api_proto.AnyQuestion4_2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_proto.AnyQuestion4_2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.AnyQuestion4_2.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultQuestion: (f = msg.getDefaultQuestion()) && proto.api_proto.DefaultQuestion.toObject(includeInstance, f),
    customQuestion: (f = msg.getCustomQuestion()) && proto.api_proto.CustomQuestion4_2.toObject(includeInstance, f)
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
 * @return {!proto.api_proto.AnyQuestion4_2}
 */
proto.api_proto.AnyQuestion4_2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_proto.AnyQuestion4_2;
  return proto.api_proto.AnyQuestion4_2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_proto.AnyQuestion4_2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_proto.AnyQuestion4_2}
 */
proto.api_proto.AnyQuestion4_2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_proto.DefaultQuestion;
      reader.readMessage(value,proto.api_proto.DefaultQuestion.deserializeBinaryFromReader);
      msg.setDefaultQuestion(value);
      break;
    case 2:
      var value = new proto.api_proto.CustomQuestion4_2;
      reader.readMessage(value,proto.api_proto.CustomQuestion4_2.deserializeBinaryFromReader);
      msg.setCustomQuestion(value);
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
proto.api_proto.AnyQuestion4_2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_proto.AnyQuestion4_2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_proto.AnyQuestion4_2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.AnyQuestion4_2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultQuestion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_proto.DefaultQuestion.serializeBinaryToWriter
    );
  }
  f = message.getCustomQuestion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api_proto.CustomQuestion4_2.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefaultQuestion default_question = 1;
 * @return {?proto.api_proto.DefaultQuestion}
 */
proto.api_proto.AnyQuestion4_2.prototype.getDefaultQuestion = function() {
  return /** @type{?proto.api_proto.DefaultQuestion} */ (
    jspb.Message.getWrapperField(this, proto.api_proto.DefaultQuestion, 1));
};


/**
 * @param {?proto.api_proto.DefaultQuestion|undefined} value
 * @return {!proto.api_proto.AnyQuestion4_2} returns this
*/
proto.api_proto.AnyQuestion4_2.prototype.setDefaultQuestion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api_proto.AnyQuestion4_2.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_proto.AnyQuestion4_2} returns this
 */
proto.api_proto.AnyQuestion4_2.prototype.clearDefaultQuestion = function() {
  return this.setDefaultQuestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_proto.AnyQuestion4_2.prototype.hasDefaultQuestion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomQuestion4_2 custom_question = 2;
 * @return {?proto.api_proto.CustomQuestion4_2}
 */
proto.api_proto.AnyQuestion4_2.prototype.getCustomQuestion = function() {
  return /** @type{?proto.api_proto.CustomQuestion4_2} */ (
    jspb.Message.getWrapperField(this, proto.api_proto.CustomQuestion4_2, 2));
};


/**
 * @param {?proto.api_proto.CustomQuestion4_2|undefined} value
 * @return {!proto.api_proto.AnyQuestion4_2} returns this
*/
proto.api_proto.AnyQuestion4_2.prototype.setCustomQuestion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api_proto.AnyQuestion4_2.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_proto.AnyQuestion4_2} returns this
 */
proto.api_proto.AnyQuestion4_2.prototype.clearCustomQuestion = function() {
  return this.setCustomQuestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_proto.AnyQuestion4_2.prototype.hasCustomQuestion = function() {
  return jspb.Message.getField(this, 2) != null;
};


