use serde::{Deserialize, Serialize};
use shengji_core::{game_state, interactive};

#[allow(clippy::large_enum_variant)]
#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum GameMessage {
    State {
        state: game_state::GameState,
    },
    Message {
        from: String,
        message: String,
    },
    Broadcast {
        data: interactive::BroadcastMessage,
        message: String,
    },
    Beep,
    ReadyCheck,
    Error(String),
    Header {
        messages: Vec<String>,
    },
    Kicked,
    FirstStartAt(String), // sync with everyone about the time when the game was first started
    Timeout, // informs everyone to take a break now! (sent by the person we tries to start the next game after the every two hours)
}

/// zstd dictionary, compressed with zstd.
pub const ZSTD_ZSTD_DICT: &[u8] = include_bytes!("../dict.zstd");
