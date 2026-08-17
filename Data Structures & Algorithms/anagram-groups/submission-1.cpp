class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string,vector<string>> mp;
        for(string str:strs){
            string r = str;
            sort(str.begin(),str.end());
            mp[str].push_back(r);
        }
        vector<vector<string>> ans;
        for(auto& [first,second]:mp){
          ans.push_back(second);
        }
        return ans;
    }
};
