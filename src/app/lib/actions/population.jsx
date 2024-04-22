"use server";

export async function getPopulationData() {
  try {
    let res = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    let data = await res.json();
    return data.data;
  } catch (e) {
    return { message: e.message };
  }
}
