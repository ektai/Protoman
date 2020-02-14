// source: model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.api_proto.SpaceDetail');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
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
proto.api_proto.SpaceDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api_proto.SpaceDetail.repeatedFields_, null);
};
goog.inherits(proto.api_proto.SpaceDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api_proto.SpaceDetail.displayName = 'proto.api_proto.SpaceDetail';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api_proto.SpaceDetail.repeatedFields_ = [2];



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
proto.api_proto.SpaceDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.api_proto.SpaceDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api_proto.SpaceDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.SpaceDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    space: (f = msg.getSpace()) && proto.api_proto.Space.toObject(includeInstance, f),
    aliasList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.api_proto.SpaceDetail}
 */
proto.api_proto.SpaceDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api_proto.SpaceDetail;
  return proto.api_proto.SpaceDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api_proto.SpaceDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api_proto.SpaceDetail}
 */
proto.api_proto.SpaceDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api_proto.Space;
      reader.readMessage(value,proto.api_proto.Space.deserializeBinaryFromReader);
      msg.setSpace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAlias(value);
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
proto.api_proto.SpaceDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api_proto.SpaceDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api_proto.SpaceDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api_proto.SpaceDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpace();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api_proto.Space.serializeBinaryToWriter
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Space space = 1;
 * @return {?proto.api_proto.Space}
 */
proto.api_proto.SpaceDetail.prototype.getSpace = function() {
  return /** @type{?proto.api_proto.Space} */ (
    jspb.Message.getWrapperField(this, proto.api_proto.Space, 1));
};


/**
 * @param {?proto.api_proto.Space|undefined} value
 * @return {!proto.api_proto.SpaceDetail} returns this
*/
proto.api_proto.SpaceDetail.prototype.setSpace = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api_proto.SpaceDetail} returns this
 */
proto.api_proto.SpaceDetail.prototype.clearSpace = function() {
  return this.setSpace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api_proto.SpaceDetail.prototype.hasSpace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string alias = 2;
 * @return {!Array<string>}
 */
proto.api_proto.SpaceDetail.prototype.getAliasList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api_proto.SpaceDetail} returns this
 */
proto.api_proto.SpaceDetail.prototype.setAliasList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api_proto.SpaceDetail} returns this
 */
proto.api_proto.SpaceDetail.prototype.addAlias = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api_proto.SpaceDetail} returns this
 */
proto.api_proto.SpaceDetail.prototype.clearAliasList = function() {
  return this.setAliasList([]);
};


