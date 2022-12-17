window.SIDEBAR_ITEMS = {"constant":[["BASE_TX_COST_FIXED","Base cost for any Sui transaction"],["BASE_TX_COST_PER_BYTE","Cost per byte of a Move call transaction i.e., the cost of such a transaction is base_cost + (BASE_TX_COST_PER_BYTE * size)"],["CONSENSUS_COST","Additional cost for Move call transactions that use a shared object. i.e., the base cost of such a transaction is BASE_TX_COST_FIXED + CONSENSUS_COST"],["MAX_BASIC_BLOCKS","Maximum number of basic blocks that a Move function can have. Enforced by the Move bytecode verifier."],["MAX_DEPENDENCY_DEPTH","Maximum dependency depth. Enforced by the Move bytecode verifier."],["MAX_FUNCTION_PARAMETERS","Maximum number of paramters that a Move function can have. Enforced by the Move bytecode verifier."],["MAX_GENERIC_INSTANTIATION_LENGTH","Maximum number of type arguments that can be bound to generic type parameters. Enforced by the Move bytecode verifier."],["MAX_LOOP_DEPTH","Maximum number of nested loops. Enforced by the Move bytecode verifier."],["MAX_MOVE_OBJECT_SIZE","Maximum size of the `contents` part of an object, in bytes. Enforced by the Sui adapter when effects are produced."],["MAX_MOVE_PACKAGE_SIZE","Maximum size of a Move package object, in bytes. Enforced by the Sui adapter at the end of a publish transaction."],["MAX_NUM_EVENT_EMIT","Maximum number of events that a single Move function can emit. Enforced by the Sui adapter during execution."],["MAX_PUSH_SIZE","Maximum number of pushes in one function. Enforced by the Move bytecode verifier."],["MAX_TX_GAS","Maximum number of gas units that a single MoveCall transaction can use. Enforced by the Sui adapter."],["MAX_TYPE_NODES","Maximum number of type nodes. Enforced by the Move bytecode verifier."],["MAX_VALUE_STACK_SIZE","Maximum stack size value. Enforced by the Move bytecode verifier."],["MOVE_BINARY_FORMAT_VERSION","Maximum Move bytecode version the VM understands. All older versions are accepted."],["OBJ_ACCESS_COST_DELETE_PER_BYTE",""],["OBJ_ACCESS_COST_MUTATE_PER_BYTE",""],["OBJ_ACCESS_COST_READ_PER_BYTE",""],["OBJ_ACCESS_COST_VERIFY_PER_BYTE","Per-byte cost charged for each input object to a transaction. Meant to approximate the cost of checking locks for each object"],["OBJ_DATA_COST_REFUNDABLE","=== Storage gas costs === Per-byte cost of storing an object in the Sui global object store. Some of this cost may be refundable if the object is later freed"],["OBJ_METADATA_COST_NON_REFUNDABLE",""],["PACKAGE_PUBLISH_COST_FIXED","Additional cost for a transaction that publishes a package i.e., the base cost of such a transaction is BASE_TX_COST_FIXED + PACKAGE_PUBLISH_COST_FIXED"],["PACKAGE_PUBLISH_COST_PER_BYTE","Cost per byte for a transaction that publishes a package"]]};