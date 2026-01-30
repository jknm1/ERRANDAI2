const SUPABASE_URL = "https://abkgfbsftstfzsgaiyby.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_0zyUqAaNpk1Uo6b6hAup5w_3-uyLJso";

const supabase = supabaseJs.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const form = document.getElementById("waitlist-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  const { error } = await supabase
    .from("waitlist")
    .insert([{ email }]);

  if (error) {
    message.textContent = "Something went wrong. Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "You're early 🚀 Welcome to ErrandAI.";
    message.style.color = "lightgreen";
    form.reset();
  }
});
