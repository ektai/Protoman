// source: model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.api_proto.Answer4_2');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.api_proto.User4_2');

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
proto.api_proto.Answer4_2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api_proto.Answer4_2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_proto.Answer4_2.displayName = 'proto.api_proto.Answer4_2';
}



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
proto.api_proto.Answer4_2.prototype.toObject = function(opt_includeInstance) {
  return proto.api_proto.Answer4_2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_proto.Answer4_2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.Answer4_2.toObject = function(includeInstance, msg) {
  var f, obj = {
    answerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    answerText: jspb.Message.getFieldWithDefault(msg, 2, ""),
    answeredBy: (f = msg.getAnsweredBy()) && proto.api_proto.User4_2.toObject(includeInstance, f),
    createdAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numThanks: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.api_proto.Answer4_2}
 */
proto.api_proto.Answer4_2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_proto.Answer4_2;
  return proto.api_proto.Answer4_2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_proto.Answer4_2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_proto.Answer4_2}
 */
proto.api_proto.Answer4_2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnswerText(value);
      break;
    case 3:
      var value = new proto.api_proto.User4_2;
      reader.readMessage(value,proto.api_proto.User4_2.deserializeBinaryFromReader);
      msg.setAnsweredBy(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumThanks(value);
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
proto.api_proto.Answer4_2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_proto.Answer4_2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_proto.Answer4_2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.Answer4_2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnswerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnswerText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAnsweredBy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api_proto.User4_2.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getNumThanks();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string answer_id = 1;
 * @return {string}
 */
proto.api_proto.Answer4_2.prototype.getAnswerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_proto.Answer4_2} returns this
 */
proto.api_proto.Answer4_2.prototype.setAnswerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string answer_text = 2;
 * @return {string}
 */
proto.api_proto.Answer4_2.prototype.getAnswerText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api_proto.Answer4_2} returns this
 */
proto.api_proto.Answer4_2.prototype.setAnswerText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional User4_2 answered_by = 3;
 * @return {?proto.api_proto.User4_2}
 */
proto.api_proto.Answer4_2.prototype.getAnsweredBy = function() {
  return /** @type{?proto.api_proto.User4_2} */ (
    jspb.Message.getWrapperField(this, proto.api_proto.User4_2, 3));
};


/**
 * @param {?proto.api_proto.User4_2|undefined} value
 * @return {!proto.api_proto.Answer4_2} returns this
*/
proto.api_proto.Answer4_2.prototype.setAnsweredBy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_proto.Answer4_2} returns this
 */
proto.api_proto.Answer4_2.prototype.clearAnsweredBy = function() {
  return this.setAnsweredBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_proto.Answer4_2.prototype.hasAnsweredBy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 created_at = 4;
 * @return {number}
 */
proto.api_proto.Answer4_2.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_proto.Answer4_2} returns this
 */
proto.api_proto.Answer4_2.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 num_thanks = 5;
 * @return {number}
 */
proto.api_proto.Answer4_2.prototype.getNumThanks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api_proto.Answer4_2} returns this
 */
proto.api_proto.Answer4_2.prototype.setNumThanks = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


