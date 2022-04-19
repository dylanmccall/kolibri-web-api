/*
 * Kolibri API
 * Kolibri Swagger API
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AttemptLogViewSet', 'model/Bookmarks', 'model/Buffer', 'model/Certificate', 'model/ChannelMetadataViewSet', 'model/Classroom', 'model/ContentNodeBookmarksViewset', 'model/ContentNodeTreeViewset', 'model/ContentNodeViewset', 'model/DeviceChannelMetadata', 'model/DevicePermissions', 'model/DeviceProvision', 'model/Exam', 'model/Facility', 'model/FacilityDataset', 'model/FacilityUser', 'model/File', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/Language', 'model/LearnerGroup', 'model/Lesson', 'model/LessonReport', 'model/MasteryLogViewSet', 'model/Membership', 'model/NetworkLocation', 'model/NoFacilityFacilityUser', 'model/Nonce', 'model/PingbackNotification', 'model/PingbackNotificationDismissed', 'model/PublicFacility', 'model/PublicFacilityUser', 'model/QuestionSource', 'model/RecordMaxCounterBuffer', 'model/Resource', 'model/Role', 'model/SharedKey', 'model/SyncSession', 'model/TransferSession', 'model/UserContentNodeViewset', 'model/UserSyncStatusViewSet', 'api/ApiApi', 'api/AppApi', 'api/CoachApi', 'api/DeviceApi', 'api/LearnApi', 'api/SetupApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AttemptLogViewSet'), require('./model/Bookmarks'), require('./model/Buffer'), require('./model/Certificate'), require('./model/ChannelMetadataViewSet'), require('./model/Classroom'), require('./model/ContentNodeBookmarksViewset'), require('./model/ContentNodeTreeViewset'), require('./model/ContentNodeViewset'), require('./model/DeviceChannelMetadata'), require('./model/DevicePermissions'), require('./model/DeviceProvision'), require('./model/Exam'), require('./model/Facility'), require('./model/FacilityDataset'), require('./model/FacilityUser'), require('./model/File'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/Language'), require('./model/LearnerGroup'), require('./model/Lesson'), require('./model/LessonReport'), require('./model/MasteryLogViewSet'), require('./model/Membership'), require('./model/NetworkLocation'), require('./model/NoFacilityFacilityUser'), require('./model/Nonce'), require('./model/PingbackNotification'), require('./model/PingbackNotificationDismissed'), require('./model/PublicFacility'), require('./model/PublicFacilityUser'), require('./model/QuestionSource'), require('./model/RecordMaxCounterBuffer'), require('./model/Resource'), require('./model/Role'), require('./model/SharedKey'), require('./model/SyncSession'), require('./model/TransferSession'), require('./model/UserContentNodeViewset'), require('./model/UserSyncStatusViewSet'), require('./api/ApiApi'), require('./api/AppApi'), require('./api/CoachApi'), require('./api/DeviceApi'), require('./api/LearnApi'), require('./api/SetupApi'));
  }
}(function(ApiClient, AttemptLogViewSet, Bookmarks, Buffer, Certificate, ChannelMetadataViewSet, Classroom, ContentNodeBookmarksViewset, ContentNodeTreeViewset, ContentNodeViewset, DeviceChannelMetadata, DevicePermissions, DeviceProvision, Exam, Facility, FacilityDataset, FacilityUser, File, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, Language, LearnerGroup, Lesson, LessonReport, MasteryLogViewSet, Membership, NetworkLocation, NoFacilityFacilityUser, Nonce, PingbackNotification, PingbackNotificationDismissed, PublicFacility, PublicFacilityUser, QuestionSource, RecordMaxCounterBuffer, Resource, Role, SharedKey, SyncSession, TransferSession, UserContentNodeViewset, UserSyncStatusViewSet, ApiApi, AppApi, CoachApi, DeviceApi, LearnApi, SetupApi) {
  'use strict';

  /**
   * Kolibri_Swagger_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var KolibriApi = require('index'); // See note below*.
   * var xxxSvc = new KolibriApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new KolibriApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new KolibriApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new KolibriApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AttemptLogViewSet model constructor.
     * @property {module:model/AttemptLogViewSet}
     */
    AttemptLogViewSet: AttemptLogViewSet,
    /**
     * The Bookmarks model constructor.
     * @property {module:model/Bookmarks}
     */
    Bookmarks: Bookmarks,
    /**
     * The Buffer model constructor.
     * @property {module:model/Buffer}
     */
    Buffer: Buffer,
    /**
     * The Certificate model constructor.
     * @property {module:model/Certificate}
     */
    Certificate: Certificate,
    /**
     * The ChannelMetadataViewSet model constructor.
     * @property {module:model/ChannelMetadataViewSet}
     */
    ChannelMetadataViewSet: ChannelMetadataViewSet,
    /**
     * The Classroom model constructor.
     * @property {module:model/Classroom}
     */
    Classroom: Classroom,
    /**
     * The ContentNodeBookmarksViewset model constructor.
     * @property {module:model/ContentNodeBookmarksViewset}
     */
    ContentNodeBookmarksViewset: ContentNodeBookmarksViewset,
    /**
     * The ContentNodeTreeViewset model constructor.
     * @property {module:model/ContentNodeTreeViewset}
     */
    ContentNodeTreeViewset: ContentNodeTreeViewset,
    /**
     * The ContentNodeViewset model constructor.
     * @property {module:model/ContentNodeViewset}
     */
    ContentNodeViewset: ContentNodeViewset,
    /**
     * The DeviceChannelMetadata model constructor.
     * @property {module:model/DeviceChannelMetadata}
     */
    DeviceChannelMetadata: DeviceChannelMetadata,
    /**
     * The DevicePermissions model constructor.
     * @property {module:model/DevicePermissions}
     */
    DevicePermissions: DevicePermissions,
    /**
     * The DeviceProvision model constructor.
     * @property {module:model/DeviceProvision}
     */
    DeviceProvision: DeviceProvision,
    /**
     * The Exam model constructor.
     * @property {module:model/Exam}
     */
    Exam: Exam,
    /**
     * The Facility model constructor.
     * @property {module:model/Facility}
     */
    Facility: Facility,
    /**
     * The FacilityDataset model constructor.
     * @property {module:model/FacilityDataset}
     */
    FacilityDataset: FacilityDataset,
    /**
     * The FacilityUser model constructor.
     * @property {module:model/FacilityUser}
     */
    FacilityUser: FacilityUser,
    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File: File,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The Language model constructor.
     * @property {module:model/Language}
     */
    Language: Language,
    /**
     * The LearnerGroup model constructor.
     * @property {module:model/LearnerGroup}
     */
    LearnerGroup: LearnerGroup,
    /**
     * The Lesson model constructor.
     * @property {module:model/Lesson}
     */
    Lesson: Lesson,
    /**
     * The LessonReport model constructor.
     * @property {module:model/LessonReport}
     */
    LessonReport: LessonReport,
    /**
     * The MasteryLogViewSet model constructor.
     * @property {module:model/MasteryLogViewSet}
     */
    MasteryLogViewSet: MasteryLogViewSet,
    /**
     * The Membership model constructor.
     * @property {module:model/Membership}
     */
    Membership: Membership,
    /**
     * The NetworkLocation model constructor.
     * @property {module:model/NetworkLocation}
     */
    NetworkLocation: NetworkLocation,
    /**
     * The NoFacilityFacilityUser model constructor.
     * @property {module:model/NoFacilityFacilityUser}
     */
    NoFacilityFacilityUser: NoFacilityFacilityUser,
    /**
     * The Nonce model constructor.
     * @property {module:model/Nonce}
     */
    Nonce: Nonce,
    /**
     * The PingbackNotification model constructor.
     * @property {module:model/PingbackNotification}
     */
    PingbackNotification: PingbackNotification,
    /**
     * The PingbackNotificationDismissed model constructor.
     * @property {module:model/PingbackNotificationDismissed}
     */
    PingbackNotificationDismissed: PingbackNotificationDismissed,
    /**
     * The PublicFacility model constructor.
     * @property {module:model/PublicFacility}
     */
    PublicFacility: PublicFacility,
    /**
     * The PublicFacilityUser model constructor.
     * @property {module:model/PublicFacilityUser}
     */
    PublicFacilityUser: PublicFacilityUser,
    /**
     * The QuestionSource model constructor.
     * @property {module:model/QuestionSource}
     */
    QuestionSource: QuestionSource,
    /**
     * The RecordMaxCounterBuffer model constructor.
     * @property {module:model/RecordMaxCounterBuffer}
     */
    RecordMaxCounterBuffer: RecordMaxCounterBuffer,
    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource: Resource,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The SharedKey model constructor.
     * @property {module:model/SharedKey}
     */
    SharedKey: SharedKey,
    /**
     * The SyncSession model constructor.
     * @property {module:model/SyncSession}
     */
    SyncSession: SyncSession,
    /**
     * The TransferSession model constructor.
     * @property {module:model/TransferSession}
     */
    TransferSession: TransferSession,
    /**
     * The UserContentNodeViewset model constructor.
     * @property {module:model/UserContentNodeViewset}
     */
    UserContentNodeViewset: UserContentNodeViewset,
    /**
     * The UserSyncStatusViewSet model constructor.
     * @property {module:model/UserSyncStatusViewSet}
     */
    UserSyncStatusViewSet: UserSyncStatusViewSet,
    /**
     * The ApiApi service constructor.
     * @property {module:api/ApiApi}
     */
    ApiApi: ApiApi,
    /**
     * The AppApi service constructor.
     * @property {module:api/AppApi}
     */
    AppApi: AppApi,
    /**
     * The CoachApi service constructor.
     * @property {module:api/CoachApi}
     */
    CoachApi: CoachApi,
    /**
     * The DeviceApi service constructor.
     * @property {module:api/DeviceApi}
     */
    DeviceApi: DeviceApi,
    /**
     * The LearnApi service constructor.
     * @property {module:api/LearnApi}
     */
    LearnApi: LearnApi,
    /**
     * The SetupApi service constructor.
     * @property {module:api/SetupApi}
     */
    SetupApi: SetupApi
  };

  return exports;
}));
