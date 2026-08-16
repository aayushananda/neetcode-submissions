class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
     vector<pair<int,int>> v;   // {value, original_index}
    for (int i = 0; i < nums.size(); i++) {
        v.push_back({nums[i], i});
    }
       sort(v.begin(), v.end());
        int l= 0;
        int r = nums.size()-1;
       
        while(l<r){
            int sum = v[l].first + v[r].first;

            if(sum==target){
              int idx1 = v[l].second;
              int idx2 = v[r].second;
                if(idx1<idx2) return {idx1, idx2};
                else return {idx2, idx1};
            }

            else if(sum<target)
            l++;
            else r--;
        }
        return {};
    }
};
