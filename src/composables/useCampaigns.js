import { ref } from "vue";
import { db } from "src/boot/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export function useCampaigns() {
  const campaign = ref(null);
  const campaigns = ref([]);
  const generalStats = ref(null);
  const topCampaign = ref(null); // NEW: top contributed campaign
  const loading = ref(false);
  const error = ref(null);

  // Fetch a single campaign by ID
  const fetchCampaign = async (campaignId) => {
    loading.value = true;
    error.value = null;

    try {
      const docRef = doc(db, "campaigns", campaignId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        campaign.value = { id: docSnap.id, ...docSnap.data() };
      } else {
        error.value = "Campaign not found";
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching campaign:", err);
    } finally {
      loading.value = false;
    }
  };

  // Fetch all campaigns
  const fetchAllCampaigns = async () => {
    loading.value = true;
    error.value = null;

    try {
      const querySnapshot = await getDocs(collection(db, "campaigns"));
      campaigns.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching campaigns:", err);
    } finally {
      loading.value = false;
    }
  };

  // Fetch general stats
  const fetchGeneralStats = async () => {
    loading.value = true;
    error.value = null;

    try {
      const docRef = doc(db, "general-stats", "totals");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        generalStats.value = docSnap.data();
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching general stats:", err);
    } finally {
      loading.value = false;
    }
  };

  // <<< NEW: Fetch top contributed campaign >>>
  const fetchTopCampaign = async () => {
    loading.value = true;
    error.value = null;

    try {
      const querySnapshot = await getDocs(collection(db, "campaigns"));
      if (!querySnapshot.empty) {
        let topPercent = 0;
        let topDoc = null;

        querySnapshot.docs.forEach((doc) => {
          const data = doc.data();
          const percent = data.goalAmount
            ? (data.raisedAmount || 0) / data.goalAmount
            : 0;
          if (percent > topPercent) {
            topPercent = percent;
            topDoc = doc;
          }
        });

        if (topDoc) {
          topCampaign.value = { id: topDoc.id, ...topDoc.data() };
        }
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching top campaign:", err);
    } finally {
      loading.value = false;
    }
  };

  // Calculate percentage
  const getPercentage = (raised, goal) => {
    if (!goal) return 0;
    return Math.min(Math.round((raised / goal) * 100), 100);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return {
    campaign,
    campaigns,
    generalStats,
    topCampaign,
    loading,
    error,
    fetchCampaign,
    fetchAllCampaigns,
    fetchGeneralStats,
    fetchTopCampaign,
    getPercentage,
    formatCurrency,
  };
}
